import React, { useContext } from "react";
import "./css/Price.css";
import { orderContext } from "./store/ContextApi";

const Price = () => {
  const ctx = useContext(orderContext);
  return (
    <>
      <div id="price">
        <div className="main">
          <div className="center">
            <span className="details">Price details</span>
            <div className="price_main_div">
              <div className="price_center_div">
                <div className="center_details">
                  <div className="items">Price ({ctx.orderCount} items)</div>
                </div>
                <span>
                  <div className="div_totPrice">
                    <div>
                      <div className="totPrice">₹{ctx.price}</div>
                    </div>
                  </div>
                </span>
              </div>
              <div className="main_charge">
                <div className="center_charge">
                  <div className="charge">Delivery Charges</div>
                </div>
                <span>
                  <span className="free">Free</span>
                </span>
              </div>
              <div className="main_pay">
                <div className="center_pay">
                  <div className="pay">
                    <div className="payable">Total Payable</div>
                  </div>
                  <span>
                    <div className="payment">
                      <div>
                        <div className="total">₹{ctx.price}</div>
                      </div>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Price;
