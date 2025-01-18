import React from "react"

const WatchRead = () => {
    return (
        <>

            <h2 className="font-sans text-black font-medium">What to Watch and Read</h2>
            <div className="pt-3 pb-5">
                <div className="grid grid-cols-2 gap-5 md:divide-x">
                    <div className="cursor-pointer md:flex flex-row-reverse md:gap-5 justify-between">
                        <img src='watch1.webp' alt="" className="md:w-32 md:h-24" />
                        <div className="w-3/4">
                            <small className="uppercase text-xs text-gray-600">Book Review</small>
                            <h2 className="font-serif text-black">She Threw a Great Party. And No Matter Your Party, You Were Invited.</h2>
                            <small className="uppercase text-xs text-gray-600">4 min read</small>
                        </div>
                    </div>
                    <div className="md:pl-5 cursor-pointer md:flex flex-row-reverse gap-5 justify-between">
                        <img src='watch2.webp' alt="" className="md:w-32 md:h-24" />
                        <div className="w-3/4">
                            <h2 className="font-serif text-black">The Shows and Movies Readers Loved in 2024</h2>
                            <small className="uppercase text-xs text-gray-600">11 min read</small>
                        </div>
                    </div>
                </div>
                <div className="md:divider"></div>
                <div className="pt-5 md:pt-0 grid grid-cols-2 gap-5 md:divide-x">
                    <div className="cursor-pointer md:flex flex-row-reverse md:gap-5 justify-between">
                        <img src='watch3.webp' alt="" className="md:w-32 md:h-24" />
                        <div className="w-3/4">
                            <small className="uppercase text-xs text-gray-600">Book Review</small>
                            <h2 className="font-serif text-black">A Sex Tape, a Senate Race and a Centuries-Old Family Curse</h2>
                            <small className="uppercase text-xs text-gray-600">4 min read</small>
                        </div>

                    </div>
                    <div className="md:pl-5 cursor-pointer md:flex flex-row-reverse md:gap-5 justify-between">
                        <img src='watch4.webp' alt="" className="md:w-32 md:h-24" />
                        <div className="w-3/4">
                            <small className="uppercase text-xs text-gray-600">Movie Review</small>
                            <h2 className="font-serif text-black">12 David Lynch Titles and Where You Can Stream Them</h2>
                            <small className="uppercase text-xs text-gray-600">8 min read</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default WatchRead;
