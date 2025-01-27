import React from "react"

const article = {
    id: "1",
    title: "Neil Gaiman Responds to Explosive Report of Sexual Assault",
    image: "share1.webp",
    readTime: "N/A",
    author: "Staff Reporter",
    publishedDate: "2024-01-20",
    content: "Renowned author Neil Gaiman has responded to recent allegations of sexual assault...",
    tags: ["Neil Gaiman", "Sexual Assault", "Literature", "News"],
    category: "Entertainment"
  };

const SingleBody = () => {
    if (!article) {
        return <div className="text-center text-gray-500 mt-10">Article not found.</div>;
      }
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <img 
        src={article.image} 
        alt={article.title} 
        className="w-full h-64 object-cover rounded-lg"
      />
      <h1 className="text-3xl font-bold text-gray-800 mt-4">{article.title}</h1>
      <p className="text-gray-600 mt-2">By <span className="font-medium">{article.author}</span> | {article.publishedDate}</p>
      <p className="text-gray-500 text-sm mt-1">{article.readTime}</p>
      
      <div className="mt-4 text-gray-700 leading-7">
        {article.content}
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800">Tags:</h3>
        <div className="flex flex-wrap mt-2">
          {article.tags.map((tag, index) => (
            <span 
              key={index} 
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <span className="text-gray-600 font-medium">Category: </span>
        <span className="text-indigo-600 font-semibold">{article.category}</span>
      </div>
    </div>
  )
};

export default SingleBody;
