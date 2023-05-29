import React from "react";
import ReactDOM from "react-dom/client";
import ReactApp from "./react-18/react";
import Start from "./start";
import './index.css';

const DOM = ReactDOM.createRoot(document.getElementById('root'))
DOM.render(
    <React.StrictMode>
        <ReactApp />
    </React.StrictMode>
)
