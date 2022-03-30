/* Packages */
import React from "react";
import ReactDOM from "react-dom";

/* Components */
import App from "./App";

/* Styles */
import "./index.css";

const element = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const refContianer = document.querySelector("#root");

/* Rendering the element on reference container */
ReactDOM.render(element, refContianer);
