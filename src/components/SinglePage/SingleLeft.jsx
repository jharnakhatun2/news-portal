import React from "react"
import Comment from "../Comment/Comment";
import LikeShareButtons from "../LikeShare/LikeShare";

const SingleLeft = ({ post }) => {

  return (
    <div className="w-full md:max-w-4xl">
      <div className="space-y-1">
        <h1 className="text-xl md:text-2xl font-medium font-serif text-gray-900 pt-4 md:pt-0">{post?.title}</h1>
        <div className="sm:flex sm:space-x-2">
        <p className="font-serif text-gray-600">Published : <span className="text-red-500">{post?.published_date},</span></p>
        <p className="text-red-500 font-oswald text-sm">Dragon News Online Report</p>
        </div>
      </div>
      <div className="py-5">
        <img
          src={`/${post?.image}`}
          alt={post?.title}
          className="w-full h-[500px] object-cover rounded-lg"
        />
        <p className="text-gray-600 mt-2 text-xs flex justify-end">By <span className="font-medium"> {post?.author}</span></p>
      </div>
      <div className="font-sans text-md text-gray-700">
        <p className=" my-4">{post?.short_desc}</p>
        <p>{post?.desc}</p>
        <div className="sm:flex justify-between items-center">
        <p className="font-poppins text-red-500 text-sm mt-1">{post?.readTime}</p>
        <LikeShareButtons articleTitle={post?.title} articleUrl={window.location.href}/>
        </div>
        
      </div>

      <Comment/>

      {post?.tags && <div className="mt-6">
        <h3 className="text-gray-600 font-medium text-lg">Tags:</h3>
        {post.tags?.map((tag, index) => (
          <span key={index} className="text-sm space-x-2 font-semibold">{tag} ,</span>
        ))}
      </div>}


      {/* Category */}
      {post?.category && <div className="mt-6">
        <span className="text-gray-600 font-medium">Category : </span>
        <span className="text-indigo-600 font-semibold">{post?.category}</span>
      </div>}

    </div>
  )
};

export default SingleLeft;
