import  { useEffect } from 'react'
import { YOUTUBE_VIDEO_API } from '../Utils/contants'
import { useDispatch } from 'react-redux'
import { AddPopularVideos } from '../Utils/PopularVideoSlice'

const UsePopularVideo = () => {

    const dispatch = useDispatch()
   

    
    
    const getpopularVideo = async ()=>{
        const video =  await fetch(YOUTUBE_VIDEO_API)
        const Videodata =  await video.json()
     
        
        dispatch(AddPopularVideos(Videodata.items))
    }

    useEffect(()=>{
        getpopularVideo()
    },[])
 
}

export default UsePopularVideo