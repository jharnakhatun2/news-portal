import React from "react"
import Border from "../../util/Border/Border";
import Opinion from "../RightSideBar/Opinion";
import SliderTwo from "../RightSideBar/SliderTwo";
import MostShared from "../RightSideBar/MostShared";
import SliderOne from "../RightSideBar/SliderOne";

const RightSideBar = () => {
  return (
    <div className="py-5 lg:py-0 lg:max-w-72">
      {/* border */}
      <Border/>
      {/* 1st row */}
      <div className="lg:flex flex-col-reverse space-y-3 lg:space-y-0">
        <div className="space-y-2 pt-2">
          <h2 className="text-2xl font-serif">And Just Like That, Carrie Bradshaw’s Front Stoop Was Closed</h2>
          <p className="text-sm text-gray-600">A West Village homeowner was granted permission to build a gate on her house in an effort to stop overeager “Sex and the City” fans from trespassing.</p>
          <small className="uppercase text-xs text-gray-600">2 min read</small>
        </div>
        <img src="demo-card-thumbnail.png" alt="Image/Dragon News" className="w-full"/>
      </div>
      <div className="divider"></div>
      {/* 2nd rows */}
      <SliderOne/>
      <Border/>
      <h2 className="pb-5 font-oswald font-bold">Opinion</h2>
      <Opinion/>
      <SliderTwo/>
      <Border/>
      <h2 className="pb-5 font-newsCycle font-bold">Most Shared</h2>
      <MostShared/>
    </div>
  )
};

export default RightSideBar;
