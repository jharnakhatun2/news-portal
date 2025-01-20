import React from "react"
import LeftPost from "../LeftSideBar/MoreNews/LeftPost";
import ImageMore from "../LeftSideBar/MoreNews/ImageMore";
import RightPost from "../LeftSideBar/MoreNews/RightPost";

const MoreNews = () => {
  return (
    <div>
      <h2 className="font-sans text-black font-medium pt-3">More News</h2>
      <div className="lg:flex lg:divide-x gap-5 py-5">
        <div className="md:flex gap-5">
          <LeftPost />
          <div className="divider sm:hidden"></div>
          <ImageMore />
        </div>
        <div className="divider lg:hidden"></div>
        <RightPost />
      </div>

    </div>
  )
};

export default MoreNews;
