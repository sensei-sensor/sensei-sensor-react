import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import UserPage from "./pages/UserPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={"/"} component={MainPage}>
          <Route path={"/UserPage"} component={UserPage} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
