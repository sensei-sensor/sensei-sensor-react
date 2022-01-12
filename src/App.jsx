import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DisasterPage from "./pages/DisasterPage";
import MainPage from "./pages/MainPage";
import UserPage from "./pages/UserPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={"/"} component={MainPage}>
          <Route path={"/UserPage"} component={UserPage} />
          <Route path={"/DisasterPage"} component={DisasterPage} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
