import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AdminRoutes from "./components/routes/AdminRoutes";
import UserRoutes from "./components/routes/UserRoutes";
import LoginPage from "./components/common/LoginPage";
import { useSelector } from "react-redux";
function App() {
  const storedData = localStorage.getItem("userInfo");
  const userLogin = useSelector((state) => state.userLogin.userInfo);
  const userRole = storedData || userLogin ? JSON.parse(storedData) : null;

  return (
    <Router>
      <Routes>
        <Route
          path="/"
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
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
