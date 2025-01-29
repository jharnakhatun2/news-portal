import React from "react"
import SingleNav from "../../components/Navbar/SingleNav";
import SingleBody from "../../components/SinglePage/SingleBody";
import Living from "../../components/News/Living";
import { useLocation } from "react-router-dom";
import Footer from "../../components/Footer/Footer";


const SinglePage = () => {
  const location = useLocation();
  const post = location.state?.post;
  console.log(post)

 

  return (
    <>
      <SingleNav />
      <SingleBody post={post}/>
      
      <div className="lg:pt-4 pb-10 hidden md:block ">
      <h2 className="border-t font-sans text-black font-medium pt-7 pb-4 uppercase text-sm">Also read</h2>
        <Living />
      </div>
      <Footer/>
    </>
  )
};

export default SinglePage;
