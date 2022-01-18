import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DisasterPage from "./pages/DisasterPage";
import MainPage from "./pages/MainPage";
import UserPage from "./pages/UserPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={"/"} element={<MainPage />} />
        <Route path={"/DisasterPage"} element={<DisasterPage />} />
        <Route
          path={"/UserPage"}
          element={
            <PrivateRoute>
              <UserPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

function PrivateRoute({ children }) {
  const auth = useAuth();
  return auth ? children : <Navigate to="/" />;
}

function useAuth() {
  return true;
}
