import React, { useEffect, useState } from "react";
import { FaList, FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { YOTTUBE_SEARCH_API } from "../Utils/contants";

const Header = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [storeSearchData, setStoreSearchData] = useState([]);

  const getSearchResult = async () => {
    if (text.trim == "") return;
    const video = await fetch(YOTTUBE_SEARCH_API + text);
    const Videodata = await video.json();
    setStoreSearchData(Videodata);
  };

  useEffect(() => {
    const timer = setTimeout(() => getSearchResult(), 300);
    return () => clearTimeout(timer);
  }, [text]);

  const handleToggle = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex items-center justify-between p-3 shadow-lg bg-white fixed w-full top-0 z-50">
      {/* Left Section - Logo & Menu */}
      <div className="flex items-center gap-2">
        <button 
          onClick={handleToggle}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
        >
          <FaList className="text-gray-700 text-xl" />
        </button>
        <img 
          className="h-5 md:h-6 lg:h-8 mx-2 object-contain" 
          src="./Ytnwe.png" 
          alt="YouTube Logo" 
        />
      </div>

      {/* Middle Section - Search Bar */}
      <div className="relative flex-grow mx-4 hidden md:flex justify-center">
        <div className="flex items-center w-full max-w-2xl">
          <div className="flex items-center flex-grow">
            <input
              type="text"
              placeholder="Search"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full px-4 py-2 text-gray-700 border border-r-0 border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500"
            />
            <button className="px-6 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-200 transition-colors duration-200">
              <FaSearch className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Search Suggestions */}
        {storeSearchData.length > 0 && (
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white shadow-lg w-full max-w-2xl mt-1 rounded-xl overflow-hidden border border-gray-200">
            <ul className="py-2">
              {storeSearchData[1]?.map((item, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-3 transition-colors duration-200"
                >
                  <FaSearch className="text-gray-400 text-sm" />
                  <span className="text-gray-700 text-sm">{item || "No title"}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Right Section - User Icon */}
      <div className="flex items-center">
        <button className="relative group">
          <img
            className="h-8 w-8 md:h-9 md:w-9 rounded-full cursor-pointer object-cover border-2 border-transparent group-hover:border-gray-300 transition-all duration-200"
            src="./UserIcon.png"
            alt="User Icon"
          />
        </button>
      </div>
    </div>
  );
};

export default Header;