import React, { useEffect } from 'react'
import { YOUTUBE_VIDE0_API } from '../utils/Constants';

const VideoContainer = () => {

  useEffect(()=>{
    getvideos();
  },[])

  const getvideos = async()=>{
    const data = await fetch(YOUTUBE_VIDE0_API);
    const json = await data.json();
    console.log(json);
  }



  return (
    <div>VideoContainer</div>
  )
}

export default VideoContainer