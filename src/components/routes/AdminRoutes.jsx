import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "../admin/AdminDashboard";
import AdminPageOne from "../admin/AdminPageOne";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<AdminDashboard />} />
      <Route path="page1" element={<AdminPageOne />} />
    </Routes>
  );
};

export default AdminRoutes;
