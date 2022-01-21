import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DisasterPage from "./pages/DisasterPage";
import MainPage from "./pages/MainPage";
import UserPage from "./pages/UserPage";

export default function App() {
  const [isLogin, setIsLogin] = useState(null);
  const handleLogin = () => {
    setIsLogin(true);
  };
  const handleLogout = () => {
    setIsLogin(false);
  };

  useEffect(() => {
    axios
      .post(
        import.meta.env.VITE_API_HOST + "sensei-sensor-php/WebAPI/checkLogin/",
        null,
        { withCredentials: true }
      )
      .then((response) => {
        if (response.status === 200) {
          handleLogin();
        } else {
          handleLogout();
        }
      })
      .catch(() => {
        handleLogout();
      });
  }, []);

  const PrivateRoute = ({ children }) => {
    return isLogin ? children : <Navigate to="" />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={"/"} element={<MainPage isLogin={isLogin} />} />
        <Route path={"/DisasterPage"} element={<DisasterPage />} />
        <Route
          path={"/UserPage"}
          element={
            <PrivateRoute>
              <UserPage isLogin={isLogin} />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
