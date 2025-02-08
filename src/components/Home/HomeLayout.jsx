import React, { useEffect, useState } from "react"
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import Border from "../../util/Border/Border";
import MoreNews from "./MoreNews";
import Well from "../LeftSideBar/Well/Well";
import NewsAll from "../News/NewsAll";




const HomeLayout = () => {


  return (
    <div>
      <div className="lg:flex justify-between gap-2 py-5">
        <LeftSideBar />
        <div className="lg:divider lg:divider-horizontal"></div>
        <RightSideBar />
      </div>
      <Border />
      <MoreNews />
      <Border />
      <Well />
      <Border />
      <NewsAll />
    </div>
  )
};

export default HomeLayout;
