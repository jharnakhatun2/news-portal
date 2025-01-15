import React, { useEffect, useState } from "react"
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";

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
    <div className="lg:flex justify-between gap-2 py-5">
      <LeftSideBar/>
      <div className="lg:divider lg:divider-horizontal"></div>
      <RightSideBar/>
      
    </div>
  )
};

export default HomeLayout;
