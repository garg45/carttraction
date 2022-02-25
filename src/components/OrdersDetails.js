import React, { useContext } from "react";
import "../components/css/PlaceOrder.css";
import logo from "../images/E1.jpg";
import { orderContext } from "./store/ContextApi";

const OrdersDetails = ({ data, index }) => {
  const ctx = useContext(orderContext);
  console.log(data);
  console.log(index);
  const logo1 = data.image[0];
  console.log(logo1);
  const deleteItem = () => {
    console.log(index);
    ctx.deleteOrder(index);
    console.log(ctx);
  };
  return (
    <>
      <div className="card">
        <div className="cardImg">
          <img src={logo1} alt={logo}></img>
        </div>
        <div className="cardDesc">
          <p className="name">{data.name}</p>
          <p className="desc">{data.description}</p>
          <p className="price">₹{data.price}</p>
        </div>
        <div className="remove">
          <button onClick={deleteItem}>Remove</button>
        </div>
      </div>
    </>
  );
};

export default OrdersDetails;
