import React from "react"
import { Link } from "react-router-dom";

const SmallNav = ({categoryData,toggleMenu}) => {
  
  return (
    <>
    {toggleMenu && <nav className="block lg:hidden sm:w-1/4 top-12 absolute h-screen bg-white z-50">
            <ul className="text-sm space-y-4 bg-white px-2 pb-2">
              {categoryData?.map((item) => (
    
                <Link to={`/${item.url.replace(/^\//, '')}`} key={item.id}
                  className="cursor-pointer p-3 border hover:shadow-lg block"
                >
                  {item.name}
                </Link>
              ))}
            </ul>
          </nav>}
    </>
  )
};

export default SmallNav;
