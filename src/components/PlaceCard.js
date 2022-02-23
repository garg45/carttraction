import React, { useState } from "react";
import "./css/PlaceOrder.css";
import { NavLink, useHistory } from "react-router-dom";
import "./css/PlaceCard.css";

const PlaceCard = ({ data, keys, index }) => {
  const history = useHistory();
  const dataList = data;
  console.log(dataList);
  const [toggle, setToggle] = useState(true);
  const editAddress = () => {
    history.push({
      pathname: "/contact",
      state: { data: dataList, key: keys[index] },
    });
  };
  const handleClick = () => {
    history.push({
      pathname: "/checkOut",
      state: { data: dataList, key: keys[index] },
    });
  };
  return (
    <>
      <div className="card">
        <h3>
          <span
            className="number"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            {toggle ? <span>+</span> : <span>-</span>}
          </span>
        </h3>
        <div className="address">
          <div className="sub-address">
            <span>
              <span className="name">
                <span>
                  {dataList.firstName} {dataList.lastName} {dataList.phone}
                </span>
                <br />
              </span>
              <span>
                {` ${dataList.village} ${dataList.distt} ${dataList.state} ${dataList.country} - `}
                <span className="pinCode">
                  <span>{dataList.pinCode}</span>
                </span>
              </span>
            </span>
          </div>
        </div>
        {toggle ? (
          <div className="todo-btn">
            <i
              className="far fa-edit add-btn"
              title="Edit Address"
              onClick={editAddress}
            ></i>
            <i className="far fa-trash-alt add-btn" title="Delete Address"></i>
          </div>
        ) : (
          <button onClick={handleClick}>Continue With This</button>
        )}
      </div>
    </>
  );
};

export default PlaceCard;
