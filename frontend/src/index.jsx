import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { HashRouter } from "react-router-dom";
import { Routes } from "./routes/routes";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
