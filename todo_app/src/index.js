import React from "react";
import ReactDOM from "react-dom/client";
//Adding bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import App from "./App";
//Adding jQuery and Popper
import $ from "jquery";
import Popper from "popper.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
