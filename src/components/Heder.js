import React from "react";
import { FaList, FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import UsePopularVideo from "../CustomHook/UsePopularVideo";

const Heder = () => {
    const dispatch = useDispatch()
    const HandleToggle = ()=>{
        dispatch(toggleMenu())

    }
 
  return (
    <div className="grid grid-flow-col p-4 shadow-lg items-center bg-white">
      {/* Left Section - Logo */}
      <div className="flex items-center gap-4 col-span-3">
        
         <FaList onClick={HandleToggle} className="text-balck-500 h-8 cursor-pointer" />
        <img className="h-10 mx-2" src="./Ytnwe.png" alt="YouTube Logo" />
      </div>

      {/* Middle Section - Search Bar */}
      <div className="flex items-center w-full max-w-lg border border-gray-300 rounded-full px-4 py-2 bg-gray-100 col-span-8 mx-10">
        <input
          type="text"
          placeholder="Search"
          className="flex-grow bg-transparent outline-none px-2"
        />
        <button className="text-gray-600 hover:text-black">
          <FaSearch />
        </button>
      </div>

      {/* Right Section - User Icon */}
      <div className="col-span-1">
        <img className="h-8 w-8 rounded-full cursor-pointer" src="./UserIcon.png" alt="User Icon"  />
      </div>
    </div>
  );
};

export default Heder;
