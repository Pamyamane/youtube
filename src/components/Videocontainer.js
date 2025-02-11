  import React from "react";
  import { useSelector } from "react-redux";
  import VideoCard from "./VideoCard";
  import { Link } from "react-router-dom";

  const Videocontainer = () => {
    const USPopularVideo = useSelector(
      (store) => store.PopularVideo?.ISPopularVideos
    );
    const isMenuOpen = useSelector((store) => store.app.IsopenMenu);
    if (!USPopularVideo || USPopularVideo.length === 0) return null;
   
    return (
      <div className={`fixed top-14 right-0 bottom-0 overflow-y-auto
        ${isMenuOpen ? 'left-60' : 'left-0'} 
        transition-all duration-200`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-6 p-6">
          {USPopularVideo.map((video) => (
            <Link key={video.id} to={`/watch?v=${video.id}`}>
              <VideoCard USPopularVideo={[video]} />
            </Link>
          ))}
        </div>
      </div>
    );
  };

  export default Videocontainer;
