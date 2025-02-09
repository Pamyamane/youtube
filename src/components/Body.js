import React from 'react'
import MainContainer from './MainContainer'
import Sidebar from './Sidebar'
import UsePopularVideo from '../CustomHook/UsePopularVideo';

const Body = () => {
  UsePopularVideo();
  return (
    
    <div className='flex'>

        <Sidebar/>
        <MainContainer/>
    </div>
  )
}

export default Body