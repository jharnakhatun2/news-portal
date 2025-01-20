import React, { useEffect, useState } from "react"
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import Border from "../../util/Border/Border";
import MoreNews from "./MoreNews";


const HomeLayout = () => {
  const [newsData, setNewsData] = useState(null)
  useEffect(()=>{
    fetch('news.json')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setNewsData(data);
    })
    .catch(err => console.error(err))
  },[])
  return (
    <div>
    <div className="lg:flex justify-between gap-2 py-5">
      <LeftSideBar/>
      <div className="lg:divider lg:divider-horizontal"></div>
      <RightSideBar/>
    </div>
    <Border/>
    <MoreNews/>
    <Border/>
   
    </div>
  )
};

export default HomeLayout;
