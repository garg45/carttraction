import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

import loginPic from "../images/login.svg";
import { orderContext } from "./store/ContextApi";

const Login = () => {
  const ctx = useContext(orderContext);
  console.log(ctx);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInput = (e) => {
    console.log(e);
    setEmail(e.target.value);
  };

  const loginUser = async (e) => {
    console.log(e);
    e.preventDefault();
  };
  return (
    <>
      <section className="sign-in">
        <div className="container mt-5">
          <div className="signin-content">
            <div className="signin-image">
              <figure>
                <img src={loginPic} alt="Login pic" />
              </figure>
              <NavLink to="/signup" className="nav-image-link">
                Create an Account
              </NavLink>
            </div>

            <div className="signin-form">
              <h2 className="form-title">Sign in</h2>
              <form method="POST" className="register-form" id="register-form">
                <div className="form-group">
                  <label className="l" htmlFor="email">
                    <i className="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input
                    className="inpt"
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    value={email}
                    onChange={handleInput}
                    placeholder="Your Email"
                  />
                </div>

                <div className="form-group">
                  <label className="l" htmlFor="password">
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input
                    className="inpt"
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Your Password"
                  />
                </div>

                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signin"
                    id="signin"
                    className="form-submit"
                    value="Log In"
                    onClick={loginUser}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
