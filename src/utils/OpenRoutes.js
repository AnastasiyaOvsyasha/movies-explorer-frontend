import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const OpenRoutes = ({ isLoggedIn }) => {
  return !isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default OpenRoutes;
