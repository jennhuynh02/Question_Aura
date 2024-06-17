import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./components/Login";
import Logout from "./components/Logout";
import ProtectedRoute from "./components/ProtectedRoute";

const RoutesConfig: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="/" element={<ProtectedRoute />}>
        <Route path="/" element={<Home />} />
        <Route path="/logout" element={<Logout />} />
      </Route>
    </Routes>
  );
};

export default RoutesConfig;
