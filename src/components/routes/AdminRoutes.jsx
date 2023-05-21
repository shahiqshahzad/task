import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "../admin/AdminDashboard";
import AdminPageOne from "../admin/AdminPageOne";
import AdminPageTwo from "../admin/AdminPageTwo";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<AdminDashboard />} />
      <Route path="page1" element={<AdminPageOne />} />
      <Route path="page2" element={<AdminPageTwo />} />
    </Routes>
  );
};

export default AdminRoutes;
