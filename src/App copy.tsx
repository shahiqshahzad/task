import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// import AdminRoutes from "./components/routes/AdminRoutes";
import UserRoutes from "./components/routes/UserRoutes";
import LoginPage from "./components/common/LoginPage";
function App() {
  const userRole = "user"; // Replace with logic to determine user role

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {userRole === "user" ? (
          <Route path="/*" element={<UserRoutes />} />
        ) : userRole === "admin" ? (
          <Route path="/*" element={<UserRoutes />} />
        ) : (
          <Navigate to="/" />
        )}
      </Routes>
    </Router>
  );
}

export default App;
