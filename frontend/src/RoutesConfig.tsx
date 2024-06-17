import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./components/Login";

const RoutesConfig: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default RoutesConfig;
