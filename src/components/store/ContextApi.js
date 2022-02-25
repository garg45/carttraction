import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import E1 from "../../../src/images/E1.jpeg";
import E2 from "../../../src/images/E2.jpg";
import { useHistory } from "react-router-dom";

const orderContext = createContext({
  order: [
    {
      image: "",
      name: "",
      description: "",
      price: "",
    },
  ],
  addOrder: () => {},
  deleteOrder: () => {},
  orderCount: 0,
  price: 0,
});
const ContextApi = (props) => {
  const history = useHistory();
  const [orders, setOrders] = useState([]);
  const [keys, setKeysList] = useState([]);
  const [cnt, setCnt] = useState(0);
  const [price, setPrice] = useState(0);

  console.log(price);
  const addOrder = async (val) => {
    setOrders([val]);
    const res = await axios.post(
      "https://carttraction-11b9b-default-rtdb.firebaseio.com/product.json",
      val
    );
    setPrice(price + val.price);
    console.log(price);
    setOrders([...orders, val]);
    setCnt(cnt + 1);
    console.log(res);
    await getData();
  };

  console.log(orders);
  console.log(keys);

  const deleteOrder = async (index) => {
    await getData();
    console.log(index);
    const key = keys[index];
    console.log(key);
    const res = await axios.delete(
      `https://carttraction-11b9b-default-rtdb.firebaseio.com/product/${key}.json`
    );
    console.log(res);
    setCnt(cnt - 1);
    await getData();
    alert("Deleted");
  };

  const context = {
    order: orders,
    addOrder,
    deleteOrder,
    orderCount: cnt,
    price: price,
  };

  const getData = async () => {
    const res = await axios.get(
      "https://carttraction-11b9b-default-rtdb.firebaseio.com/product.json"
    );
    console.log(res);
    console.log(res.data);
    if (!res.data) {
      setKeysList([]);
      setOrders([]);
      setCnt(0);
      setPrice(0);
      // history.goBack();
      // res.data = {};
    }
    const data = res.data;
    const keysList = Object.keys(data);
    const dataList = [];
    keysList.map((key) => {
      return dataList.push(data[key]);
    });
    console.log(keysList);
    setKeysList(keysList);
    console.log(keys);
    let price = 0;
    dataList.map((ele) => {
      price = price + ele.price;
    });
    setPrice(price);
    setCnt(keysList.length);
    console.log(keysList.length);
    console.log(dataList);
    setOrders(dataList);
    console.log(orders);

    // history.push("/placeOrder");
  };

  useEffect(async () => {
    await getData();
  }, []);

  return (
    <>
      <orderContext.Provider value={context}>
        {props.children}
      </orderContext.Provider>
    </>
  );
};

export default ContextApi;
export { orderContext };
