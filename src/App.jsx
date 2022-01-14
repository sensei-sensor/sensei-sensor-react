import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DisasterPage from "./pages/DisasterPage";
import MainPage from "./pages/MainPage";
import UserPage from "./pages/UserPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={"/"} element={<MainPage />} />
        <Route path={"/UserPage"} element={<UserPage />} />
        <Route path={"/DisasterPage"} element={<DisasterPage />} />
      </Routes>
    </BrowserRouter>
  );
}
