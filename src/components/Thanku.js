import React, { useEffect, useState } from "react";
import "./css/Thanku.css";
import { NavLink } from "react-router-dom";

const Thanku = () => {
  const [orderId, setOrderId] = useState();
  const genOrderId = (len) => {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < len; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    setOrderId(result);
    return result;
  };
  useEffect(() => {
    genOrderId(20);
  }, []);
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>Hii, Customer</h1>
          <h2>Your Order successfully placed</h2>
          <p>
            We are pleased to confirm your order no :
            <h3>{orderId}</h3>
          </p>
          <p>Thankyou for shopping with Carttraction!</p>
          <NavLink to="/">back to homepage</NavLink>
        </div>
      </div>
    </>
  );
};

export default Thanku;
