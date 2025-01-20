import React from "react"

const ImageMore = () => {
    return (
        <div className="md:max-w-lg xl:max-w-xl sm:flex flex-col-reverse justify-end xl:items-center md:pl-5 md:border-l">
            
            <div className="cursor-pointer">
                <h2 className="font-serif text-black text-lg hover:text-gray-600">André Soltner, Famed Chef at New York’s Lutèce, Dies at 92</h2>
                <p className="font-sans text-gray-500">Customers returned again and again for his impeccable French dishes at a restaurant that one food critic said “set the gold standard.”</p>
                <small className="uppercase text-xs text-gray-600">5 min read</small>
            </div>
            <div className=" pt-5 sm:pt-0">
                <img src="morenews.webp" alt="secondLayout"  />
                <small className="flex justify-end uppercase text-[10px] text-gray-600 pt-1">Haiyun Jiang for The New York Times</small>
            </div>
        </div>
    )
};

export default ImageMore;
