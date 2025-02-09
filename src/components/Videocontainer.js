import React from "react";
import { useSelector } from "react-redux";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const Videocontainer = () => {
  const USPopularVideo = useSelector(
    (store) => store.PopularVideo?.ISPopularVideos
  );

  if (!USPopularVideo || USPopularVideo.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {USPopularVideo.map((video) => (
        <Link key={video.id} to={`/watch?v=${video.id}`}>
          <VideoCard USPopularVideo={[video]} /> {/* Pass as an array */}
        </Link>
      ))}
    </div>
  );
};

export default Videocontainer;
