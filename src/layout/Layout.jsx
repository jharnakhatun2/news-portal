import React from "react"
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <div className="max-w-7xl mx-auto font-poppins px-2">
      <Outlet/>
      <Footer/>
    </div>
  )
};

export default Layout;
