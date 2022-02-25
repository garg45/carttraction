import React, { useContext, useEffect, useState } from "react";
import "./css/PlaceOrder.css";
import { NavLink } from "react-router-dom";
import Price from "./Price";
import { useLocation } from "react-router-dom";
import OrderSummary from "./OrderSummary";
import { orderContext } from "./store/ContextApi";

const CheckOut = () => {
  const ctx = useContext(orderContext);
  const location = useLocation();
  const [data, setData] = useState({});
  const getData = async () => {
    if (!location.state) {
      alert("Plz Add Address");
    } else {
      setData(location.state.data);
      console.log(data);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div id="container">
        <div className="main-div">
          <div className="center-div">
            <div className="main-card">
              <div className="card checkOutCard">
                <div className="address">
                  <div className="delivery">
                    Delivery Address
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
                      <span className="cname">{`${data.firstName} ${data.lastName} `}</span>
                      <span>
                        {`${data.village}, ${data.distt}, ${data.state} - `}
                        <span className="cpinCode"> {data.pinCode}</span>
                      </span>
                    </span>
                  </div>
                </div>
                <NavLink className="nav-link" to="placeOrder">
                  change address
                </NavLink>
              </div>
            </div>
            <div className="addItemDiv"></div>
            <OrderSummary cnt={ctx.orderCount} />
          </div>
          <Price />
        </div>
        <NavLink to="orderPlaced" className="navlink">
          Place Order
        </NavLink>
      </div>
    </>
  );
};

export default CheckOut;
