import React from "react"

const ReuseNews = ({data}) => {
  return (
    <div className="md:grid grid-cols-3  xl:grid-cols-5 gap-7">
            {data?.map((item) => (
                <div key={item.id} className="font-serif text-sm space-y-2 hover:cursor-pointer">
                    <h5 className="font-sans text-black font-medium">{item.topic}</h5>
                    <img src={item.image} alt="news image" />
                    <p className="hover:text-gray-600">{item.post1}</p>
                    <p className="hover:text-gray-600">{item.post2}</p>
                    <p className="hover:text-gray-600">{item.post3}</p>
                </div>
            ))}
        </div>
  )
};

export default ReuseNews;
