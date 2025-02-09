import React from "react";
import { FaHome, FaMusic, FaVideo, FaFilm, FaHistory, FaClock, FaList } from "react-icons/fa";
import { useSelector } from "react-redux";

const Sidebar = () => {
    const IsopenMenu = useSelector(store => store.app.IsopenMenu)
    const USPopularVideo = useSelector((store) => store.PopularVideo?.ISPopularVideos); 
    console.log(USPopularVideo,"USPopularVideo");
        if (!IsopenMenu) return null;
    
  return (
    <div className="p-5 shadow-lg w-64 h-screen bg-gray-100 overflow-y-auto">
      {/* Primary Navigation */}
      <ul className="space-y-3 border-b pb-3">
        <li className="flex items-center gap-3 p-2 hover:bg-gray-200 rounded-md cursor-pointer">
          <FaHome className="text-blue-500" />
          Home
        </li>
        <li className="flex items-center gap-3 p-2 hover:bg-gray-200 rounded-md cursor-pointer">
          <FaVideo className="text-red-500" />
          Shorts
        </li>
        <li className="flex items-center gap-3 p-2 hover:bg-gray-200 rounded-md cursor-pointer">
          <FaFilm className="text-green-500" />
          Subscriptions
        </li>
      </ul>

      {/* Subscriptions */}
      <h2 className="text-lg font-semibold mt-4 mb-2">Subscriptions</h2>
      <ul className="space-y-3 border-b pb-3">
        <li className="flex items-center gap-3 p-2 hover:bg-gray-200 rounded-md cursor-pointer">
          <FaMusic className="text-red-500" />
          Music
        </li>
        <li className="flex items-center gap-3 p-2 hover:bg-gray-200 rounded-md cursor-pointer">
          <FaVideo className="text-green-500" />
          Videos
        </li>
        <li className="flex items-center gap-3 p-2 hover:bg-gray-200 rounded-md cursor-pointer">
          <FaFilm className="text-purple-500" />
          Movies
        </li>
      </ul>

      {/* You Section */}
      <h2 className="text-lg font-semibold mt-4 mb-2">You</h2>
      <ul className="space-y-3">
        <li className="flex items-center gap-3 p-2 hover:bg-gray-200 rounded-md cursor-pointer">
          <FaHistory className="text-blue-500" />
          History
        </li>
        <li className="flex items-center gap-3 p-2 hover:bg-gray-200 rounded-md cursor-pointer">
          <FaList className="text-red-500" />
          Playlist
        </li>
        <li className="flex items-center gap-3 p-2 hover:bg-gray-200 rounded-md cursor-pointer">
          <FaVideo className="text-green-500" />
          Liked Videos
        </li>
        <li className="flex items-center gap-3 p-2 hover:bg-gray-200 rounded-md cursor-pointer">
          <FaClock className="text-purple-500" />
          Watch Later
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
