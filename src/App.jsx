import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DisasterPage from "./pages/DisasterPage";
import MainPage from "./pages/MainPage";
import UserPage from "./pages/UserPage";
import axios from "axios";

export default function App() {
  const [isLogin, setIsLogin] = useState(null);

  useEffect(() => {
    axios
      .post(
        import.meta.env.VITE_API_HOST + "sensei-sensor-php/WebAPI/checkLogin/",
        null,
        { withCredentials: true }
      )
      .then((response) => {
        if (response.status === 200) {
          setIsLogin(true);
        }
      })
      .catch(() => {
        setIsLogin(false);
      });
  }, []);

  const PrivateRoute = ({ children }) => {
    return isLogin ? children : <Navigate to="" />;
  };

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
