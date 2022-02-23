import React, { useEffect, useState } from "react";
import "./css/PlaceOrder.css";
import axios from "axios";
import PlaceCard from "./PlaceCard";
import Box from "@mui/material/Box";
import { LinearProgress } from "@mui/material";
import { NavLink, useHistory } from "react-router-dom";
import Price from "./Price";

const PlaceOrder = () => {
  const history = useHistory();
  const [data, setData] = useState([]);
  const [keys, setKeysList] = useState([]);
  const [load, setLoad] = useState(true);
  const getData = async () => {
    const res = await axios.get(
      "https://carttraction-11b9b-default-rtdb.firebaseio.com/address.json"
    );
    console.log(res);
    console.log(res.data);
    const data = res.data;
    const keysList = Object.keys(data);
    const dataList = [];
    keysList.map((key) => {
      return dataList.push(data[key]);
    });
    console.log(keysList);
    setKeysList(keysList);
    // console.log(dataList[0].firstName);
    console.log(dataList);
    setData(dataList);
    setLoad(false);
  };
  useEffect(() => {
    getData();
  }, []);
  const addAddress = () => {
    history.push("/contact");
  };
  return (
    <>
      {load ? (
        <Box className="box" sx={{ width: "30%" }}>
          <LinearProgress />
        </Box>
      ) : (
        <div id="container">
          <div className="main-div">
            <div className="center-div">
              <div className="main-card">
                <div className="deliveryAddress">
                  <h3 className="addressh1">
                    <span className="number">1</span>
                    Delivery Address
                  </h3>
                </div>
                {data.map((e, index) => {
                  return (
                    <PlaceCard
                      data={e}
                      key={index.toString()}
                      keys={keys}
                      index={index}
                    />
                  );
                })}
                <div>
                  <div className="addItemDiv"></div>
                  <div className="addItem">
                    <i
                      className="fa fa-plus add-btn"
                      title="Add Address"
                      onClick={addAddress}
                    ></i>
                    Add a new address
                  </div>
                  <div className="addItemDiv"></div>
                  <h3 className="addressh3">
                    <span className="number">2</span>
                    ORDER SUMMARY
                  </h3>
                </div>
              </div>
            </div>
            <Price />
          </div>
          <NavLink to="checkOut" className="navlink">
            CHECKOUT CONTINUE
          </NavLink>
        </div>
      )}
    </>
  );
};

export default PlaceOrder;
