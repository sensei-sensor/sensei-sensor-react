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
        }
      })
      .catch(() => {
        handleLogout();
      });
  }, []);

  const PrivateRoute = ({ children }) => {
    return isLogin ? children : <Navigate to="/" />;
  };

  if (isLogin === null) {
    return <div>Loading...</div>;
  } else {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path={"/"}
            element={<MainPage isLogin={isLogin} handleLogin={handleLogin} />}
          />
          <Route path={"/disaster"} element={<DisasterPage />} />
          <Route
            path={"/user"}
            element={
              <PrivateRoute>
                <UserPage isLogin={isLogin} handleLogout={handleLogout} />
              </PrivateRoute>
            }
          />
          <Route path={"/*"} element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
