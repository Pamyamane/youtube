import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../Utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {

  const USPopularVideo = useSelector(
    (store) => store.PopularVideo?.ISPopularVideos
  ); 
  const dispatch = useDispatch();
  const [SearchParam] = useSearchParams();
  const Videoid = SearchParam.get("v");
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    dispatch(closeMenu());

    // Find the video details from USPopularVideo matching the Videoid
    if (USPopularVideo && Videoid) {
      const video = USPopularVideo.find((v) => v.id === Videoid);
      setVideoData(video);
    }
  }, [dispatch, USPopularVideo, Videoid]);

  const formatCount = (count) => {
    if (!count) return "0";
    count = parseInt(count);
    if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
    if (count >= 1000) return `${(count / 1000).toFixed(1)}K`;
    return count.toLocaleString();
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gray-900 text-white p-4">
      <div className="w-full max-w-4xl">
        {/* Video Player */}
        <div className="relative w-full h-64 sm:h-96 md:h-[500px] rounded-lg overflow-hidden shadow-lg">
          {Videoid ? (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${Videoid}`}
              title={videoData?.snippet?.title || "YouTube Video Player"}
              allowFullScreen
            ></iframe>
          ) : (
            <div className="flex items-center justify-center h-full bg-gray-800">
              <p className="text-lg text-gray-400">No video selected</p>
            </div>
          )}
        </div>

        {/* Video Info */}
        {videoData && (
          <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">{videoData.snippet?.title}</h2>
            <p className="text-gray-400 mt-2">{videoData.snippet?.description}</p>
            <div className="flex items-center text-gray-500 text-sm mt-2">
              <span>{videoData.snippet?.channelTitle}</span>
              <span className="mx-2">•</span>
              <span>{formatCount(videoData.statistics?.viewCount)} views</span>
              <span className="mx-2">•</span>
              <span>{formatCount(videoData.statistics?.likeCount)} likes</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WatchPage;
