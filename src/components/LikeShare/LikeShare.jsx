import { Share2, ThumbsUp } from "lucide-react";
import { useState } from "react";


const LikeShareButtons = ({ articleTitle, articleUrl }) => {
  const [likes, setLikes] = useState(0);

  // Handle Like Button
  const handleLike = () => {
    setLikes(likes + 1);
  };

  // Handle Share Button
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: articleTitle,
          url: articleUrl,
        });
        console.log("Article shared successfully!");
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      // Fallback: Open social media share links
      const encodedUrl = encodeURIComponent(articleUrl);
      const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
      window.open(facebookUrl, "_blank");
    }
  };

  return (
    <div className="flex items-center space-x-4 mt-4">
      {/* Like Button */}
      <button
        onClick={handleLike}
        className="flex items-center space-x-2 px-3 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition"
      >
        <ThumbsUp size={20} />
        <span>{likes}</span>
      </button>

      {/* Share Button */}
      <button
        onClick={handleShare}
        className="flex items-center space-x-2 px-3 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded-lg transition"
      >
        <Share2 size={20} />
        <span>Share</span>
      </button>
    </div>
  );
};

export default LikeShareButtons;
