import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
const Start = React.lazy(()=>import('./start'))

const DOM = ReactDOM.createRoot(document.getElementById("root"));
DOM.render(
  <React.StrictMode>
    <React.Suspense fallback={<div></div>}>
      <Start />
    </React.Suspense>
  </React.StrictMode>
)

// React Webpack 5.88.2 Fallbacks and Lazy load
