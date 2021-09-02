import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import MaterialTheme from "./styles/MaterialTheme";
import MaterialViewPage from "./pages/MaterialViewPage";

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Router>
      <ThemeProvider theme={MaterialTheme}>
        <Route exact path={"/"} component={MaterialViewPage} />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
