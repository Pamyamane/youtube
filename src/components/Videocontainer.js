import React from "react";
import { useSelector } from "react-redux";
import VideoCard from "./VideoCard";

const Videocontainer = () => {
  const USPopularVideo = useSelector(
    (store) => store.PopularVideo?.ISPopularVideos
  );
  return (
    <div>
      <VideoCard USPopularVideo={USPopularVideo} />
    </div>
  );
};

export default Videocontainer;
