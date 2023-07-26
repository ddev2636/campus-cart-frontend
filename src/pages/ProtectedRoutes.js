import React, { Children } from "react";
import { useAppContext } from "../context/appContext";
import { Navigate } from "react-router-dom";
const ProtectedRoutes = ({ children }) => {
  const { user } = useAppContext();
  if (!user) {
    return <Navigate to="/landing" />;
  }
  return children;
};

export default ProtectedRoutes;
