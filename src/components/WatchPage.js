import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [SearchParam] = useSearchParams();
  const Videoid = SearchParam.get("v");

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gray-900 text-white p-4">
      <div className="w-full max-w-4xl">
        {/* Video Player */}
        <div className="relative w-full h-64 sm:h-96 md:h-[500px] rounded-lg overflow-hidden shadow-lg">
          {Videoid ? (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${Videoid}`}
              title="YouTube Video Player"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="flex items-center justify-center h-full bg-gray-800">
              <p className="text-lg text-gray-400">No video selected</p>
            </div>
          )}
        </div>

        {/* Video Info */}
        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold">Video Title</h2>
          <p className="text-gray-400 mt-2">
            This is a sample description. Replace it with actual video details.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
