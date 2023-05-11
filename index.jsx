import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Start from "./src/Start";

const Page = (
  <React.StrictMode>
    <Start />
  </React.StrictMode>
);

const DOM = ReactDOM.createRoot(document.getElementById("root"));

DOM.render(Page);
