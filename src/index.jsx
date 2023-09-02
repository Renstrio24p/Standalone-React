import React from "react";
import ReactDOM from "react-dom/client";
import ReactApp from "./components/react";
import './assets/sass/index.scss';
import App from "./app";

const DOM = ReactDOM.createRoot(document.getElementById('root'))
DOM.render (
    <React.StrictMode>
        <App />
    </React.StrictMode>
)