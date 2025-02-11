import React from "react";
import {
  FaHome,
  FaMusic,
  FaVideo,
  FaFilm,
  FaHistory,
  FaClock,
  FaList,
  FaThumbsUp,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const IsopenMenu = useSelector((store) => store.app.IsopenMenu);


  if (!IsopenMenu) return null;

  return (
    <div className="fixed top-14 left-0 h-[calc(100vh-56px)] w-60 bg-white overflow-y-auto pb-20 thin-scrollbar">
    {/* Primary Navigation */}
    <ul className="pt-3">
      <li>
        <Link to="/" className="flex items-center px-3 py-2 hover:bg-gray-100 rounded-lg mx-2">
          <FaHome className="text-xl text-gray-600" />
          <span className="ml-6 text-sm text-gray-900">Home</span>
        </Link>
      </li>
      <li className="flex items-center px-3 py-2 hover:bg-gray-100 rounded-lg mx-2 cursor-pointer">
        <FaVideo className="text-xl text-gray-600" />
        <span className="ml-6 text-sm text-gray-900">Shorts</span>
      </li>
      <li className="flex items-center px-3 py-2 hover:bg-gray-100 rounded-lg mx-2 cursor-pointer">
        <FaFilm className="text-xl text-gray-600" />
        <span className="ml-6 text-sm text-gray-900">Subscriptions</span>
      </li>
    </ul>

    <div className="mt-3 pt-3 border-t border-gray-200">
      <h2 className="px-5 mb-1 text-base text-gray-600">Subscriptions</h2>
      <ul className="mt-2">
        <li className="flex items-center px-3 py-2 hover:bg-gray-100 rounded-lg mx-2 cursor-pointer">
          <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
            <FaMusic className="text-sm text-gray-600" />
          </div>
          <span className="ml-6 text-sm text-gray-900">Music</span>
        </li>
        <li className="flex items-center px-3 py-2 hover:bg-gray-100 rounded-lg mx-2 cursor-pointer">
          <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
            <FaVideo className="text-sm text-gray-600" />
          </div>
          <span className="ml-6 text-sm text-gray-900">Videos</span>
        </li>
        <li className="flex items-center px-3 py-2 hover:bg-gray-100 rounded-lg mx-2 cursor-pointer">
          <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
            <FaFilm className="text-sm text-gray-600" />
          </div>
          <span className="ml-6 text-sm text-gray-900">Movies</span>
        </li>
      </ul>
    </div>

    <div className="mt-3 pt-3 border-t border-gray-200">
      <h2 className="px-5 mb-1 text-base text-gray-600">You</h2>
      <ul className="mt-2">
        <li className="flex items-center px-3 py-2 hover:bg-gray-100 rounded-lg mx-2 cursor-pointer">
          <FaHistory className="text-xl text-gray-600" />
          <span className="ml-6 text-sm text-gray-900">History</span>
        </li>
        <li className="flex items-center px-3 py-2 hover:bg-gray-100 rounded-lg mx-2 cursor-pointer">
          <FaVideo className="text-xl text-gray-600" />
          <span className="ml-6 text-sm text-gray-900">Your videos</span>
        </li>
        <li className="flex items-center px-3 py-2 hover:bg-gray-100 rounded-lg mx-2 cursor-pointer">
          <FaClock className="text-xl text-gray-600" />
          <span className="ml-6 text-sm text-gray-900">Watch Later</span>
        </li>
        <li className="flex items-center px-3 py-2 hover:bg-gray-100 rounded-lg mx-2 cursor-pointer">
          <FaThumbsUp className="text-xl text-gray-600" />
          <span className="ml-6 text-sm text-gray-900">Liked videos</span>
        </li>
      </ul>
    </div>

    <style jsx>{`
      .thin-scrollbar::-webkit-scrollbar {
        width: 8px;
      }
      .thin-scrollbar::-webkit-scrollbar-track {
        background: transparent;
      }
      .thin-scrollbar::-webkit-scrollbar-thumb {
        background-color: transparent;
        border-radius: 4px;
      }
      .thin-scrollbar:hover::-webkit-scrollbar-thumb {
        background-color: #aaa;
      }
    `}</style>
  </div>
  );
};

export default Sidebar;
