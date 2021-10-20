import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import UserPage from "./pages/UserPage";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={MainPage} />
        <Route path={"/UserPage"} component={UserPage} />
      </Switch>
    </BrowserRouter>
  );
}
