import React from "react"

const SmallNav = ({categoryData,toggleMenu}) => {
  
  return (
    <>
    {toggleMenu && <nav className="block lg:hidden absolute w-1/2 top-12 sm:top-20">
      <ul className="text-sm">
        {categoryData?.map((item) => (
          <li
            key={item.id}
            className="bg-gray-100 p-2 hover:shadow-2xl hover:bg-gray-200 cursor-pointer"
          >
            {item.name}
          </li>
        ))}
      </ul>
    </nav>}
    </>
  )
};

export default SmallNav;
