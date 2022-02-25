import React from "react";
import { NavLink } from "react-router-dom";

const OrderSummary = (props) => {
  return (
    <>
      <div className="card checkOutCard">
        <div className="address">
          <div className="delivery">
            ORDER SUMMARY
            <svg
              height="10"
              width="16"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="_1t8m48"
            >
              <path
                d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
                stroke="#2974f0"
              ></path>
            </svg>
          </div>
          <div className="sub-address">
            <span>
              <span className="cname">{props.cnt} ITEMS</span>
            </span>
          </div>
        </div>
        <NavLink to="/placeOrder">CHANGE ORDERS</NavLink>
      </div>
    </>
  );
};

export default OrderSummary;
