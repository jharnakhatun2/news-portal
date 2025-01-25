import React from "react"
import { Link } from "react-router-dom";

const ReuseNews = ({ data }) => {
  return (
    <div className="md:grid grid-cols-3  xl:grid-cols-5 gap-7">
      {data?.map((item) => (
        <div key={item.id} className="font-serif text-sm space-y-2 hover:cursor-pointer">
          <h5 className="font-sans text-black font-medium">{item.topic}</h5>
          <img src={item.image} alt="news image" />
          {item.posts?.map((postItem) => (
            <Link to={`/${postItem.id}`} key={postItem.id}>
              <p className="hover:text-gray-500 py-1">{postItem.title}</p>
            </Link>
          ))}

        </div>
      ))}
    </div>
  )
};

export default ReuseNews;
