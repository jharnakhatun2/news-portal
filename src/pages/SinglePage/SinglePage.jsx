import React from "react"
import SingleNav from "../../components/Navbar/SingleNav";
import SingleBody from "../../components/SinglePage/SingleBody";
import Living from "../../components/News/Living";
import { useLocation } from "react-router-dom";


const SinglePage = () => {
  const location = useLocation();
  const post = location.state?.post;
  console.log(post)

 

  return (
    <>
      <SingleNav />
      <SingleBody post={post}/>
      <div className="py-10">
        <Living />
      </div>
    </>
  )
};

export default SinglePage;
