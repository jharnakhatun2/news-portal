import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { authApp } from "../Authentication/Context/AuthProvider";


const SingleNav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [categoryData, setCategoryData] = useState(null);
  const { user, logout } = authApp();

  //toggle menu
  const handleToggleMenu = () => {
    setToggleMenu(pre => !pre);
  }

  useEffect(() => {
    fetch('/categories.json')
      .then((res) => res.json())
      .then(data => setCategoryData(data))
      .catch((err) => console.error(err))
  }, [])

  return (
    <>
      <div className="border-double border-b-4">
        <div className="flex justify-between items-center py-3">
          {/* menu icon */}
          <div onClick={handleToggleMenu} className="transition-opacity duration-700 ease-in-out">
            {toggleMenu ? <svg className="w-6 h-6" fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M18.3 5.7c-.4-.4-1-.4-1.4 0L12 10.6 7.1 5.7c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4L10.6 12l-4.9 4.9c-.4.4-.4 1 0 1.4s1 .4 1.4 0L12 13.4l4.9 4.9c.4.4 1 .4 1.4 0s.4-1 0-1.4L13.4 12l4.9-4.9c.4-.4.4-1 0-1.4z" />
            </svg> : <svg className="w-7 h-7 cursor-pointer" fill="#000000" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>Artboard</title><path d="M768 306.2V383H256v-76.8h512zM256 536.6h512v-76.8H256v76.8zm0 153.6h512v-76.8H256v76.8z" fillRule="evenodd"></path></g></svg>
            }
          </div>

          {/* logo */}
          <Link to='/' className="w-6/12 sm:w-3/12 h-auto" >
            <img src="/logo.png" alt="logo" /></Link>

          <div className="flex items-center gap-5">
            {user ? <span onClick={logout} className="bg-slate-400 px-2 lg:px-4 py-1 lg:py-2 text-white text-xs rounded-sm cursor-pointer">LOG OUT</span> : <Link to='/auth/login' className="bg-slate-400 px-2 lg:px-4 py-1 cursor-pointer text-white text-xs rounded-sm">LOG IN</Link>}

            {/* if login then show user sign */}
            {user && <svg className="w-5 h-5 cursor-pointer" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z" fill="#000000"></path> <path d="M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z" fill="#000000"></path> </g></svg>}
          </div>
        </div>
      </div>

      {toggleMenu && <nav className="absolute sm:w-1/6 h-screen bg-white">
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

export default SingleNav;
