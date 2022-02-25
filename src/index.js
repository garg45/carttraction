import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter } from "react-router-dom";
import ContextApi from "./components/store/ContextApi";

ReactDOM.render(
  <ContextApi>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextApi>,
  document.getElementById("root")
);
