import moment from "moment";
import React from "react"
import Marquee from "react-fast-marquee";

const LargeHeader = () => {
    return (
        <>
            <div className="hidden lg:block" >
                <div className="flex justify-between items-center py-7">
                    <div>
                        <small>{moment().format('dddd MMMM D, YYYY')}</small><br />
                        <small>Today's Paper</small>
                    </div>

                    <img src="/logo.png" alt="logo" className="w-2/5 h-auto" />
                    <button className="bg-slate-400 px-4 py-1 text-white text-xs rounded-sm">LOG IN</button>

                </div>
                <div className="flex text-center bg-blue-100 py-2 px-2">
                    <small className="bg-red-400 px-4 py-1 text-white text-xs rounded-sm">LATEST</small>
                    <Marquee speed={40}>
                        <small>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</small>
                    </Marquee>
                </div>
            </div>
        </>
    )
};

export default LargeHeader;
