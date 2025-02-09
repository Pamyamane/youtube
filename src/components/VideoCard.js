import React from "react";

const VideoCard = ({ USPopularVideo }) => {
  if (!USPopularVideo || USPopularVideo.length === 0) return null;

  const formatCount = (count) => {
    if (!count) return "0";
    count = parseInt(count);
    if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
    if (count >= 1000) return `${(count / 1000).toFixed(1)}K`;
    return count.toLocaleString();
  };

  // Extract first video since USPopularVideo is now an array with one item
  const video = USPopularVideo[0];
  const { snippet, statistics, id } = video;

  return (
    <div className="flex flex-col bg-white rounded-xl overflow-hidden hover:bg-gray-200 transition-colors duration-200 cursor-pointer">
      {/* Thumbnail */}
      <div className="relative">
        <img
          className="w-full aspect-video object-cover"
          src={snippet?.thumbnails?.medium?.url}
          alt={snippet?.title}
        />
      </div>

      {/* Video Info */}
      <div className="p-4 flex-1">
        <h3 className="font-semibold text-black mb-2 line-clamp-2 text-sm leading-5">
          {snippet?.title}
        </h3>

        <p className="text-gray-500 text-sm">{snippet?.channelTitle}</p>

        <div className="flex items-center text-gray-500 text-sm space-x-2 mt-1">
          <span>{formatCount(statistics?.viewCount)} views</span>
          <span>•</span>
          <span>{formatCount(statistics?.likeCount)} likes</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
