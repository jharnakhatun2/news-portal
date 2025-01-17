import React from "react"
import Border from "../../util/Border/Border";
import FirstLayout from "../LeftSideBar/FirstLayout/FirstLayout";
import SecondLayout from "../LeftSideBar/SecondLayout/SecondLayout";

const LeftSideBar = () => {
  return (
    <div className='w-full'>
     <FirstLayout/>
     <Border/>
     <SecondLayout/>
    </div>
  )
};

export default LeftSideBar;
