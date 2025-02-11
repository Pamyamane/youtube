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
    <div className="w-full cursor-pointer">
    {/* Thumbnail */}
    <div className="relative pb-[56.25%] rounded-xl overflow-hidden mb-3">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={snippet?.thumbnails?.medium?.url}
        alt={snippet?.title}
      />
    </div>

    {/* Video Info */}
    <div className="flex gap-3">
      <div className="flex-shrink-0">
        <div className="w-9 h-9 rounded-full bg-gray-100"></div>
      </div>
      <div className="flex-1 min-w-0"> {/* Added min-w-0 for text truncation */}
        <h3 className="font-medium text-sm line-clamp-2 mb-1 leading-5">
          {snippet?.title}
        </h3>
        <div className="text-gray-600 text-xs">
          <p className="mb-1">{snippet?.channelTitle}</p>
          <div className="flex items-center">
            <span>{formatCount(statistics?.viewCount)} views</span>
            <span className="mx-1">•</span>
            <span>{formatCount(statistics?.likeCount)} likes</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default VideoCard;
