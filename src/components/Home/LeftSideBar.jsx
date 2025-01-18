import React from "react"
import Border from "../../util/Border/Border";
import FirstLayout from "../LeftSideBar/FirstLayout/FirstLayout";
import SecondLayout from "../LeftSideBar/SecondLayout/SecondLayout";
import WatchRead from "../LeftSideBar/Watch/WatchRead";

const LeftSideBar = () => {
  return (
    <div className='w-full'>
     <FirstLayout/>
     <Border/>
     <SecondLayout/>
     <Border/>
     <WatchRead/>
     <Border/>
    </div>
  )
};

export default LeftSideBar;
