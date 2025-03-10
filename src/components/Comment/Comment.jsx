import React, { useState } from "react";

const Comment = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  // Function to handle adding a new comment
  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      const comment = {
        id: Date.now(),
        text: newComment,
        likes: 0,
      };
      setComments([...comments, comment]);
      setNewComment("");
    }
  };

  // Function to handle liking a comment
  const handleLikeComment = (id) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === id
          ? { ...comment, likes: comment.likes + 1 }
          : comment
      )
    );
  };

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow mt-5">
        {/* Comments List */}
      <div className="space-y-4">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="p-4 bg-white rounded-lg shadow-sm border border-gray-200"
          >
            <p className="text-gray-700">{comment.text}</p>
            <div className="flex items-center mt-2">
              <button
                className="flex items-center text-gray-500 hover:text-red-500 transition duration-200"
                onClick={() => handleLikeComment(comment.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
                {comment.likes}
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Comment Input Section */}
      <div className="mt-6">
        <textarea
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100"
          rows="3"
          placeholder="Write your comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          className="mt-3 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
          onClick={handleAddComment}
        >
          Post Comment
        </button>
      </div>
    </div>
  );
};

export default Comment;