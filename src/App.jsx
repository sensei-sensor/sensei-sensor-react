import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import UserPage from "./pages/UserPage";

export default function App() {
  useEffect(() => {
    localStorage.getItem("groupId")
      ? JSON.parse(localStorage.getItem("groupId"))
      : localStorage.setItem("groupId", JSON.stringify([]));
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={MainPage} />
        <Route path={"/UserPage"} component={UserPage} />
      </Switch>
    </BrowserRouter>
  );
}
