import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";


const SingleNav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [categoryData, setCategoryData] = useState(null);
 
  const login = false;

  const handleToggleMenu = () => {
    setToggleMenu(pre => !pre);
  }

  useEffect(() => {
    fetch('categories.json')
      .then((res) => res.json())
      .then(data => setCategoryData(data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <div className="border-double border-b-4">
        <div className="flex justify-between items-center py-3">
          <div onClick={handleToggleMenu} className="transition-opacity duration-700 ease-in-out">
            <svg className="w-7 h-7 cursor-pointer" fill="#000000" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>Artboard</title><path d="M768 306.2V383H256v-76.8h512zM256 536.6h512v-76.8H256v76.8zm0 153.6h512v-76.8H256v76.8z" fillRule="evenodd"></path></g></svg>
            </div>
            <Link to='/' className="w-6/12 sm:w-3/12 h-auto" >
          <img src="/logo.png" alt="logo" /></Link>

          <div>
            {login ? <svg className="w-5 h-5" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z" fill="#000000"></path> <path d="M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z" fill="#000000"></path> </g></svg> : <Link to='/login' className="bg-slate-400 px-4 py-1 text-white text-xs rounded-sm">LOG IN</Link>}
            </div>
        </div>
      </div>

      {toggleMenu && <nav className="absolute sm:w-1/6 h-screen bg-white">
        <ul className="text-sm space-y-4 bg-white">
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
