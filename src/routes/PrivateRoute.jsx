import React from "react"
import { authApp } from "../components/Authentication/Context/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
 const {user} = authApp();
 
 if(user){
    return children;
 }

 return <Navigate to={"/auth/login"}></Navigate>
};

export default PrivateRoute;
