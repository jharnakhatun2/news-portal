import moment from "moment";
import React from "react"
import { authApp } from "../Authentication/Context/AuthProvider";
import { Link } from "react-router-dom";

const SmallHeader = ({ onToggleMenu }) => {
    const { user, logout } = authApp();
    return (
        <div className="block lg:hidden">
            <div className="flex justify-between items-center py-3">
                <div onClick={onToggleMenu}><svg className="w-6 h-6" fill="#000000" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>Artboard</title><path d="M768 306.2V383H256v-76.8h512zM256 536.6h512v-76.8H256v76.8zm0 153.6h512v-76.8H256v76.8z" fillRule="evenodd"></path></g></svg></div>

                <img src="/logo.png" alt="logo" className="w-8/12 h-auto" />

                {/* Login,logout, user Account */}
                <div className="flex items-center">
                    {user ? <span onClick={logout} className="bg-slate-400 px-4 py-1 text-white text-xs rounded-sm cursor-pointer">LOG OUT</span> : <Link to='/auth/login' className="bg-slate-400 px-2 py-1 cursor-pointer text-white text-xs rounded-sm">LOG IN</Link>}

                    {/* if login then show user sign */}
                    {user && <Link to='/profile'><svg className="w-5 h-5 cursor-pointer" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z" fill="#000000"></path> <path d="M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z" fill="#000000"></path> </g></svg></Link>}
                </div>

            </div>
            <div className="text-center bg-blue-100 py-2">
                <small >{moment().format('dddd MMMM D, YYYY')}</small>
            </div>
        </div>
    )
};

export default SmallHeader;
