import React from "react"
import SingleNav from "../../components/Navbar/SingleNav";
import BottomFooter from "../../components/Footer/BottomFooter";
import ProfileBody from "./ProfileBody";
import usePageTitle from "../../util/PageTitle/usePageTitle";

const Profile = () => {
  usePageTitle();
  return (
    <div>
        <SingleNav/>
        <ProfileBody/>
        <BottomFooter/> 
    </div>
  )
};

export default Profile;
