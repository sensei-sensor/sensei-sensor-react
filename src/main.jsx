import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ViewPage from "./pages/ViewPage";
import LoginPage from "./pages/LoginPage";
import "./css/reset.css";
import "./css/common.css";
import "./css/styles.css";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Router>
      <Route exact path={"/"} component={ViewPage} />
      <Route exact path={"/login"} component={LoginPage} />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
