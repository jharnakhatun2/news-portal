import React from "react"
import { authApp } from "../components/Authentication/Context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../util/Loader/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = authApp();
  const location = useLocation();
  

  if (loading) {
    return <Loader />
  }

  if (user) {
    return children;
  }
  
  return <Navigate to="/auth/login" state={{ from: location.pathname, post: location.state?.post }} />;
};

export default PrivateRoute;
