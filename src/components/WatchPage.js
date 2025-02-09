import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/appSlice";
import { useParams, useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [SearchParam] = useSearchParams();
  const Videoid = SearchParam.get("v");


  useEffect(() => {
    dispatch(closeMenu);
  }, []);
  return (
    <div>
      <iframe
        width="1000"
        height="500"
        src= {"https://www.youtube.com/embed/" + Videoid}
        title="YouTube video player"
        FrameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
     
        allowFullScreen
      ></iframe>  
    </div>
  );
};

export default WatchPage;
