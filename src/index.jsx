import React from "react";
import ReactDOM from "react-dom/client";
import ReactApp from "./components/react";
import Start from "./start"; // Start coding from scratch
import './sass/index.scss'

const DOM = ReactDOM.createRoot(document.getElementById('root'))
DOM.render (
    <React.StrictMode>
        <ReactApp /> {/* Replace this ReactApp -> Start */}
    </React.StrictMode>
)