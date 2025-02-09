import React from 'react'
import MainContainer from './MainContainer'
import Sidebar from './Sidebar'
import UsePopularVideo from '../CustomHook/UsePopularVideo';
import WatchPage from './WatchPage';
import { Outlet } from 'react-router-dom';

const Body = () => {
  UsePopularVideo();
  return (
    
    <div className='flex'>

        <Sidebar/>
        <Outlet/>
       
    </div>
  )
}

export default Body