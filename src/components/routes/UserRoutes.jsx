import React from "react";
import { Route, Routes } from "react-router-dom";
import UserDashboard from "../user/UserDashboard";
import UserPageOne from "../user/UserPageOne";
import UserPageTwo from "../user/UserPageTwo";
import ProtectedRoute from "./ProtectedRoute";

const UserRoutes = () => {
  return (
    <Routes>
      <Route
        path="/dashboard"
        element={<UserDashboard />}
        allowedRoles={["user"]}
      />
      <Route path="page1" element={<UserPageOne />} allowedRoles={["user"]} />
      <Route path="page2" element={<UserPageTwo />} allowedRoles={["user"]} />
    </Routes>
  );
};

export default UserRoutes;
