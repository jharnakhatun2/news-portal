import React, { useState } from "react"
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import HomeLayout from "../../components/Home/HomeLayout";

const Home = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggleMenu = () =>{
    setToggleMenu(pre => !pre);
  }
  return (
    <div>
      <Header onToggleMenu={handleToggleMenu}/>
      <Navbar toggleMenu={toggleMenu}/>
      <HomeLayout/>
    </div>
  )
};

export default Home;
