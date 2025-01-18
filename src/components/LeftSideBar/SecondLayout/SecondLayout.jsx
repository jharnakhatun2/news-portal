import React from "react"
import SecNav from "./SecNav";
import SecondPost from "./SecondPost";
import ThirdPost from "./ThirdPost";
import Border from "../../../util/Border/Border";

const SecondLayout = () => {
  return (
    <div>
      <SecNav />
      <div className="py-5">
      {/* 1st layout */}
      <div className="md:flex justify-between gap-5">
        <SecondPost />
        <div className="md:max-w-md xl:max-w-xl">
          <img src="secondLayout.webp" alt="secondLayout" className="md:max-w-md xl:max-w-xl" />
          <small className="flex justify-end uppercase text-[10px] text-gray-600 pt-1">Haiyun Jiang for The New York Times</small>
        </div>
      </div>
      <div className="divider"></div>
      {/* 2nd layout */}
      <div className="md:flex justify-between gap-5">
        <ThirdPost />
        <div className="md:max-w-md xl:max-w-xl">
          <img src="thirdLayout.webp" alt="secondLayout" className="md:max-w-md xl:max-w-xl" />
          <small className="flex justify-end uppercase text-[10px] text-gray-600 pt-1">Kenny Holston/The New York Times</small>
        </div>
      </div>
      </div>
      <Border/>
    </div>
  )
};

export default SecondLayout;
