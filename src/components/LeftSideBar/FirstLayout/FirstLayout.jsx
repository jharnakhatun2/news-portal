import React from "react"
import Posts from "./Posts";
import ImageSlider from "./ImageSlider";

const FirstLayout = () => {
  return (
    <div className="flex justify-between">
      <Posts/>
      <ImageSlider/>
    </div>
  )
};

export default FirstLayout;
