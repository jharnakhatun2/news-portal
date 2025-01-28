import React from "react"

const SingleLeft = ({post}) => {
  console.log(post)
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mt-4">{post?.title}</h1>
      <img 
        src={post?.image} 
        alt={post?.title} 
        className="w-full h-64 object-cover rounded-lg"
      />
      
      <p className="text-gray-600 mt-2">By <span className="font-medium">{post?.author}</span> | {post?.publishedDate}</p>
      <p className="text-gray-500 text-sm mt-1">{post?.readTime}</p>
      
      <div className="mt-4 text-gray-700 leading-7">
        {post?.content}
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800">Tags:</h3>
       
      </div>

      <div className="mt-6">
        <span className="text-gray-600 font-medium">Category: </span>
        <span className="text-indigo-600 font-semibold">{post?.category}</span>
      </div>
    </div>
  )
};

export default SingleLeft;
