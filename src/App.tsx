import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
  Outlet,
} from "react-router-dom";
import AdminRoutes from "./components/routes/AdminRoutes";
import UserRoutes from "./components/routes/UserRoutes";
import LoginPage from "./components/common/LoginPage";
function App() {
  const storedData = localStorage.getItem("userInfo");
  const userRole = storedData ? JSON.parse(storedData) : null;
  console.log(userRole);
  return (
    <Router>
      <Routes>
        {/* <Route path="/df" element={<UserPageOne />} /> */}
        <Route
          path="/login"
          element={userRole ? <Navigate to="/dashboard" /> : <LoginPage />}
        />
        <Route
          path="/*"
          element={
            userRole === "user" ? (
              <UserRoutes />
            ) : userRole === "admin" ? (
              <AdminRoutes />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
