import React from "react"
import SingleLeft from "./SingleLeft";
import SingleRight from "./SingleRight";



const SingleBody = ({post}) => {
  if(!post){
    return <p className="text-center text-red-500">No post found!</p>
  }
  return (
    <div className="md:flex gap-10 py-10">
    <SingleLeft post={post}/>
    <SingleRight />
    </div>
  )
};

export default SingleBody;
