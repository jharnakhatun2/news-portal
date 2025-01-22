import React from "react"
import News from "./News";
import Opinion from "./Opinion";
import Atr from "./Arts";

const NewsAll = () => {
  return (
    <div className="hidden md:block">
      <h2 className="font-sans text-black font-medium py-3 uppercase text-sm">News</h2>
      <News/>
      <h2 className="font-sans text-black font-medium py-3 uppercase text-sm">Opinion</h2>
      <Opinion/>
      <h2 className="font-sans text-black font-medium py-3 uppercase text-sm">Arts</h2>
      <Atr/>
      <h2 className="font-sans text-black font-medium py-3 uppercase text-sm">Living</h2>
    </div>
  )
};

export default NewsAll;
