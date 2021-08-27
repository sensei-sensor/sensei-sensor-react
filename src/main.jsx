import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MaterialViewPage from "./pages/MaterialViewPage";
import "./css/reset.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path={"/"} component={MaterialViewPage} />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
