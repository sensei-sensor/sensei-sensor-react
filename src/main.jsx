import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import MaterialTheme from "./MaterialTheme";
import MaterialViewPage from "./pages/MaterialViewPage";
import "./css/reset.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={MaterialTheme}>
        <Route exact path={"/"} component={MaterialViewPage} />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
