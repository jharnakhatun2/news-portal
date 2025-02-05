import React from "react"
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";


const Layout = () => {
  return (
    <div className="max-w-7xl mx-auto font-poppins px-2">
      <ToastContainer/>
      <Outlet/>
    </div>
  )
};

export default Layout;
