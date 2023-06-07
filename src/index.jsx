import React from "react";
import ReactDOM from "react-dom/client";
import ReactApp from "./react-18/react";
import Start from "./start"; // Start coding from scratch
import './assets/sass/index.scss'

const DOM = ReactDOM.createRoot(document.getElementById('root'))
DOM.render (
    <React.StrictMode>
        <ReactApp /> {/* Replace this ReactApp -> Start */}
    </React.StrictMode>
)