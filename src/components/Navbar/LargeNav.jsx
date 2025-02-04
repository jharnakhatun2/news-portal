import React from "react"
import { Link } from "react-router-dom";

const LargeNav = ({ categoryData }) => {

  return (
    <nav className="border-double border-b-4 hidden lg:block sticky top-0 z-50 bg-white">
      <ul className="flex justify-between text-sm py-3">
        {categoryData?.map((item) => (
          <Link to={`/${item.url.replace(/^\//, '')}`}
            key={item.id}
            className=" cursor-pointer"
          >
            {item.name}
          </Link>
        ))}
      </ul>
    </nav>
  )
};

export default LargeNav;
