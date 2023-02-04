import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);
