import React, { useEffect} from "react";
import "./css/PlaceOrder.css";
import { NavLink } from "react-router-dom";
import Price from "./Price";
import { useLocation } from "react-router-dom";

const CheckOut = () => {
  const location = useLocation();
  const data = location.state.data;

  useEffect(() => {}, []);
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
                <NavLink to="placeOrder">change address</NavLink>
              </div>
            </div>
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
