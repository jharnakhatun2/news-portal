import React from "react"
import SingleNav from "../../components/Navbar/SingleNav";
import BottomFooter from "../../components/Footer/BottomFooter";
import ProfileBody from "./ProfileBody";

const Profile = () => {
  return (
    <div>
        <SingleNav/>
        <ProfileBody/>
        <BottomFooter/> 
    </div>
  )
};

export default Profile;
