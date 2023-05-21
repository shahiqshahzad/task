// const PrivateRoute = ({ element }) => {
//   const location = useLocation();
//   const isLoggedIn = localStorage.getItem("user") ? true : false; // Replace with your logic to check if the user is logged in

//   if (!isLoggedIn) {
//     return element;
//   } else {
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }
// };

// export default PrivateRoute;

import React from "react";
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Element, admin, ...rest }) => {
  const isAuthenticated = localStorage.getItem("user") ? true : false; // Implement your own authentication logic

  if (isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <Route {...rest} element={<Element />} />;
};

export default ProtectedRoute;
