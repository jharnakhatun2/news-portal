import React from "react"
import { Link, Outlet } from "react-router-dom";
import BottomFooter from "../../Footer/BottomFooter";
import { ToastContainer } from "react-toastify";

const FormLayout = () => {
  return (
    <div className="min-h-screen flex flex-col max-w-7xl mx-auto px-2">
      <ToastContainer/>
      {/* Header */}
      <div className="border-b-4 border-double py-2 flex-shrink-0">
        <Link to='/'>
          <img
            src="/logo.png"
            alt="logo"
            className="w-3/4 md:w-2/5 lg:w-3/12 mx-auto"
          />
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex-grow flex">
        <Outlet/>
      </div>

      {/* Footer */}
      <div className="flex-shrink-0">
        <BottomFooter />
      </div>
    </div>
  )
};

export default FormLayout;
