import React from "react"
import LargeHeader from "../../components/Header/LargeHeader";
import SingleNav from "../../components/Navbar/SingleNav";

const Upcoming = () => {
  return (
    <>
    <SingleNav/>
    <div className="lg:w-6/12 mx-auto py-32">
      <h1 className="text-xl lg:text-5xl font-bold text-red-600 text-center">Upcoming Soon!</h1>
    </div>
    </>
  )
};

export default Upcoming;
