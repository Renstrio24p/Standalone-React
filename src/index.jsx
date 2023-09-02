import React from "react";
import ReactDOM from "react-dom/client";
import './assets/sass/index.scss';
import Start from "./start";

const DOM = ReactDOM.createRoot(document.getElementById('root'))
DOM.render (
    <React.StrictMode>
        <Start />
    </React.StrictMode>
)