import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import contact from "../images/address2.png";

const Contact = () => {
  const history = useHistory();
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    state: "",
    village: "",
    distt: "",
    country: "",
    pinCode: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  // connect with firebase
  const submitData = async (event) => {
    event.preventDefault();
    const {
      firstName,
      lastName,
      phone,
      state,
      village,
      distt,
      country,
      pinCode,
    } = userData;

    if (
      firstName &&
      lastName &&
      phone &&
      state &&
      village &&
      distt &&
      country &&
      pinCode
    ) {
      const res = fetch(
        "https://carttraction-11b9b-default-rtdb.firebaseio.com/address.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            phone,
            state,
            village,
            distt,
            country,
            pinCode,
          }),
        }
      );

      if (res) {
        setUserData({
          firstName: "",
          lastName: "",
          phone: "",
          state: "",
          village: "",
          distt: "",
          country: "",
          pinCode: "",
        });
        alert("Data Stored");
        history.push("/placeOrder");
      } else {
        alert("plz fill the data");
      }
    } else {
      alert("plz fill the data");
    }
  };

  return (
    <>
      <section className="contactus-section">
        <h1 className="main-heading fw-bold">Add Delivery country</h1>
        <div className="contact_container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-5">
                  <figure className="fig">
                    <img
                      src={contact}
                      alt="contatUsImg"
                      className="img-fluid"
                    />
                  </figure>
                </div>

                {/* right side contact form  */}
                <div className="contact-rightside col-12 col-lg-7">
                  <form method="POST">
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="firstName"
                          className="form-control"
                          placeholder="First Name"
                          value={userData.firstName}
                          onChange={postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="lastName"
                          className="form-control"
                          placeholder="Last Name"
                          value={userData.lastName}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="number"
                          name="phone"
                          className="form-control"
                          placeholder="Phone Number"
                          value={userData.phone}
                          onChange={postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="state"
                          className="form-control"
                          placeholder="State"
                          value={userData.state}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="village"
                          className="form-control"
                          placeholder="Village"
                          value={userData.village}
                          onChange={postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="distt"
                          className="form-control"
                          placeholder="District"
                          value={userData.distt}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 contact-input-feild">
                        <input
                          type="text"
                          name="country"
                          className="form-control"
                          placeholder="Add Country"
                          value={userData.country}
                          onChange={postUserData}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 ">
                        <input
                          type="number"
                          name="pinCode"
                          className="form-control"
                          placeholder="PIN CODE"
                          value={userData.pinCode}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div className="form-check form-checkbox-style">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label className="main-hero_para">
                        I accept the Terms & Conditions
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-style w-100"
                      onClick={submitData}
                    >
                      Save Address
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
