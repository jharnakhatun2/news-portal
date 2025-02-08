import React from "react"
import LargeHeader from "../../components/Header/LargeHeader";
import SingleNav from "../../components/Navbar/SingleNav";
import Footer from "../../components/Footer/Footer";
import usePageTitle from "../../util/PageTitle/usePageTitle";

const Upcoming = () => {
  usePageTitle();
  return (
    <>
    <SingleNav/>
    <div className="lg:w-6/12 mx-auto py-32">
      <h1 className="text-xl lg:text-3xl text-center">Upcoming Soon ...</h1>
    </div>
    <Footer/>
    </>
  )
};

export default Upcoming;
