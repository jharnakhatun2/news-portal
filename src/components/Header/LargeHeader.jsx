import moment from "moment";
import React from "react"
import Marquee from "react-fast-marquee";

const LargeHeader = () => {
    const login = false;
    return (
        <>
            <div className="hidden lg:block" >
                <div className="flex justify-between items-center py-7">
                    <div>
                        <small>{moment().format('dddd MMMM D, YYYY')}</small><br />
                        <small>Today's Paper</small>
                    </div>
                    
                    <img src="/logo.png" alt="logo" className="w-2/5 h-auto" />
                    <div>
            {login ? <svg className="w-5 h-5" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z" fill="#000000"></path> <path d="M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z" fill="#000000"></path> </g></svg> : <button className="bg-slate-400 px-4 py-1 text-white text-xs rounded-sm">LOG IN</button>}
            </div>

                </div>
                <div className="flex text-center bg-blue-100 py-2 px-2">
                    <small className="bg-red-400 px-4 py-1 text-white text-xs rounded-sm">LATEST</small>
                    <Marquee speed={40}>
                        <small>Match Highlights: Germany vs Spain — as it happened   ! A West Village homeowner was!  Match Highlights: Germany vs Spain as... </small>
                    </Marquee>
                </div>
            </div>
        </>
    )
};

export default LargeHeader;
