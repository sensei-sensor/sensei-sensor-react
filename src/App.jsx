import { CssBaseline, ThemeProvider } from "@material-ui/core";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HeaderBar from "./components/common/HeaderBar";
import MainPage from "./pages/MainPage";
import UserPage from "./pages/UserPage";
import MaterialTheme from "./styles/Theme";

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
