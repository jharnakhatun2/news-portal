import React from "react"
import Posts from "./Posts";
import ImageSlider from "./ImageSlider";

const FirstLayout = () => {
  return (
    <div className="md:flex justify-between gap-5">
      <Posts/>
      <ImageSlider/>
    </div>
  )
};

export default FirstLayout;
