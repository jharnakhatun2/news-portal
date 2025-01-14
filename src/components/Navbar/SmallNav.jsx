import React from "react"

const SmallNav = () => {
  const newsCategories = [
    "National News",
    "Breaking News",
    "Regular News",
    "International News",
    "Sports",
    "Entertainment",
    "Culture",
    "Arts",
  ];
  return (
    <nav className="block lg:hidden absolute w-full top-12 sm:top-20">
      <ul className="text-sm">
        {newsCategories.map((item, index) => (
          <li
            key={index}
            className="bg-gray-100 p-2 hover:shadow-2xl hover:bg-gray-200 cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  )
};

export default SmallNav;
