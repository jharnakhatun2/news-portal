import React from "react"
import Border from "../../util/Border/Border";
import FirstLayout from "../LeftSideBar/FirstLayout/FirstLayout";
import SecondLayout from "../LeftSideBar/SecondLayout/SecondLayout";
import WatchRead from "../LeftSideBar/Watch/WatchRead";
import Game from "../LeftSideBar/Game/Game";

const LeftSideBar = () => {
  return (
    <div className='w-full'>
     <FirstLayout/>
     <Border/>
     <SecondLayout/>
     <Border/>
     <WatchRead/>
     <Border/>
     <Game/>
    </div>
  )
};

export default LeftSideBar;
