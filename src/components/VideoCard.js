import React from "react";

const VideoCard = ({ USPopularVideo }) => {
  if (!USPopularVideo || USPopularVideo.length === 0) return null;

  const formatCount = (count) => {
    if (!count) return '0';
    count = parseInt(count);
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toLocaleString();
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {USPopularVideo.map((video) => {
        const { snippet, statistics, id } = video;
        return (
          <div
            key={id.videoId || id}
            className="flex flex-col bg-white rounded-xl overflow-hidden hover:bg-gray-200 transition-colors duration-200 cursor-pointer"
          >
            {/* Thumbnail Container */}
            <div className="relative">
              <img
                className="w-full aspect-video object-cover"
                src={snippet?.thumbnails?.medium?.url}
                alt={snippet?.title}
              />
              {/* Optional: Add duration overlay */}
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 px-2 py-1 rounded text-xs text-black">
                {video.contentDetails?.duration || ""}
              </div>
            </div>

            {/* Video Info */}
            <div className="p-4 flex-1">
              {/* Title */}
              <h3 className="font-semibold text-black mb-2 line-clamp-2 text-sm leading-5">
                {snippet?.title}
              </h3>

              {/* Channel and Stats */}
              <div className="space-y-2">
                <p className="text-black-400 text-sm hover:text-black transition-colors duration-200">
                  {snippet?.channelTitle}
                </p>
                
                <div className="flex items-center text-black-400 text-sm space-x-2">
                  <span>{formatCount(statistics?.viewCount)} views</span>
                  <span>•</span>
                  <span>{formatCount(statistics?.likeCount)} likes</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VideoCard;