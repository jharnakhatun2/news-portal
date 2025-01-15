import React, { useEffect, useState } from "react"
import LargeNav from "./LargeNav";
import SmallNav from "./SmallNav";

const Navbar = ({toggleMenu}) => {
  const [categoryData, setCategoryData] = useState(null)
  useEffect(()=>{
    fetch('categories.json')
    .then((res)=> res.json())
    .then(data => setCategoryData(data))
    .catch((err)=>console.log(err))
  },[])
  return (
    <>
    <LargeNav categoryData={categoryData}/>
    <SmallNav categoryData={categoryData} toggleMenu={toggleMenu}/>
    </>
  )
};

export default Navbar;
