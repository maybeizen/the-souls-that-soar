import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import "./assets/css/global.css";
import "/fa/css/all.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
