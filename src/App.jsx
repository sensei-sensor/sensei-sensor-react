import React from "react";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import MaterialTheme from "./styles/MaterialTheme";
import HeaderBar from "./components/HeaderBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import UserPage from "./pages/UserPage";

export default function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <ThemeProvider theme={MaterialTheme}>
        <HeaderBar />
        <Switch>
          <Route exact path={"/"} component={MainPage} />
          <Route path={"/UserPage"} component={UserPage} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}
