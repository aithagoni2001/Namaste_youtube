import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDE0_API } from "../utils/Constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_VIDE0_API);
      const json = await data.json();
      setVideos(json.items); // Assuming `json.items` is the correct structure
    } catch (error) {
      console.error("Failed to fetch videos", error);
    }
  };

  return (
    <div className="flex flex-wrap mx-2 ">
      {/* Only render the VideoCard if videos array is not empty */}
      {videos.length > 0 ? (
        videos.map((video) => <Link key={video.id} to={"/watch?v="+ video.id}> <VideoCard  info={video} /></Link>)) : (
        <div>Loading videos...</div>
      )}
    </div>
  );
};

export default VideoContainer;
