import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import configureStore from "./hooks-store/products-store";
import "./index.css";

configureStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
