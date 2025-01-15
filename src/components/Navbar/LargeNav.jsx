import React from "react"

const LargeNav = ({categoryData}) => {

    return (
        <nav className="border-double border-b-4 hidden lg:block">
            <ul className="flex justify-between text-sm py-3">
            {categoryData?.map((item) => (
          <li
            key={item.id}
            className=" cursor-pointer"
          >
            {item.name}
          </li>
        ))}
                </ul>
        </nav>
    )
};

export default LargeNav;
