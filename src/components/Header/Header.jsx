import React from "react"
import LargeHeader from "./LargeHeader";
import SmallHeader from "./SmallHeader";

const Header = ({onToggleMenu}) => {
  return (
    <>
    <LargeHeader />
    <SmallHeader onToggleMenu={onToggleMenu}/>
    </>
  )
};

export default Header;
