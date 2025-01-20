import React from "react"
import News from "./News";

const NewsAll = () => {
  return (
    <div className="hidden md:block">
      <h2 className="font-sans text-black font-medium py-3 uppercase">News</h2>
      <News/>
    </div>
  )
};

export default NewsAll;
