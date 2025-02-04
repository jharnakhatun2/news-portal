import React from "react"

const SingleLeft = ({ post }) => {

  return (
    <div className="w-full md:max-w-4xl">
      <div className="space-y-1">
        <h1 className="text-xl md:text-2xl font-medium font-serif text-gray-800 pt-4 md:pt-0">{post?.title}</h1>
        <p className="font-serif text-gray-600">Published : <span>{post?.published_date}</span></p>
        <p className="text-red-500 font-oswald">Dragon News Online Report</p>
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
        <p className="font-poppins text-red-500 text-sm mt-1">{post?.readTime}</p>
      </div>

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
