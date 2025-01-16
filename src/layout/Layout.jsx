import React from "react"
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="max-w-7xl mx-auto font-poppins px-2">
      <Outlet/>
    </div>
  )
};

export default Layout;
