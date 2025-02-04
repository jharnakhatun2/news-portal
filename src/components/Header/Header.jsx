import React from "react"
import LargeHeader from "./LargeHeader";
import SmallHeader from "./SmallHeader";

const Header = ({toggleMenu, onToggleMenu}) => {
  return (
    <>
    <LargeHeader />
    <SmallHeader onToggleMenu={onToggleMenu} toggleMenu={toggleMenu}/>
    </>
  )
};

export default Header;
