import React from "react"
import News from "./News";
import Opinion from "./Opinion";

const NewsAll = () => {
  return (
    <div className="hidden md:block">
      <h2 className="font-sans text-black font-medium py-3 uppercase text-sm">News</h2>
      <News/>
      <h2 className="font-sans text-black font-medium py-3 uppercase text-sm">Opinion</h2>
      <Opinion/>
    </div>
  )
};

export default NewsAll;
