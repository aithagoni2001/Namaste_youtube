import React, { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { CloseMenu } from "../utils/AppSlice";
import { useSearchParams } from "react-router-dom";
import { MY_API_KEY } from "../utils/Constants";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const [videoDetails, setVideoDetails] = useState(null);
  const [comments, setComments] = useState([]);
  const [relatedVideos, setRelatedVideos] = useState([]);

  const dispatch = useDispatch();

  // Wrapping the functions in useCallback to avoid re-creating on every render
  const fetchVideoDetails = useCallback(async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${MY_API_KEY}`
      );
      const json = await response.json();
      if (json.items && json.items.length > 0) {
        setVideoDetails(json.items[0].snippet);
      }
    } catch (error) {
      console.error("Failed to fetch video details:", error);
    }
  }, [videoId]);

  const fetchVideoComments = useCallback(async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${MY_API_KEY}`
      );
      const json = await response.json();
      if (json.items) {
        setComments(json.items);
      }
    } catch (error) {
      console.error("Failed to fetch video comments:", error);
    }
  }, [videoId]);

  const fetchRelatedVideos = useCallback(async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&type=video&key=${MY_API_KEY}`
      );
      const json = await response.json();
      if (json.items) {
        setRelatedVideos(json.items);
      }
    } catch (error) {
      console.error("Failed to fetch related videos:", error);
    }
  }, [videoId]);

  useEffect(() => {
    dispatch(CloseMenu());
    fetchVideoDetails();
    fetchVideoComments();
    fetchRelatedVideos();
  }, [dispatch, fetchVideoDetails, fetchVideoComments, fetchRelatedVideos]); // Include all dependencies

  return (
    <div className="flex px-10 py-5">
      {/* Left side: Video and Comments */}
      <div className="w-8/12 pr-8">
        <iframe
          className="rounded-xl"
          width="830"
          height="450"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        {videoDetails && (
          <div className="mt-4">
            <h2 className="text-2xl font-bold">{videoDetails.title}</h2>
          </div>
        )}

        <div className="mt-6">
          <h3 className="text-xl font-semibold">Comments</h3>
          <ul>
            {Array.isArray(comments) && comments.length > 0 ? (
              comments.map((comment) => (
                <li key={comment.id} className="mt-4 w-auto">
                  <p className="font-semibold">
                    {comment.snippet.topLevelComment.snippet.authorDisplayName}
                  </p>
                  <p>{comment.snippet.topLevelComment.snippet.textDisplay}</p>
                </li>
              ))
            ) : (
              <p>Loading comments...</p>
            )}
          </ul>
        </div>
      </div>

      {/* Right side: Related Videos */}
      <div className="w-4/12">
        <h3 className="text-xl font-semibold mb-4">Related Videos</h3>
        <ul>
          {Array.isArray(relatedVideos) && relatedVideos.length > 0 ? (
            relatedVideos.map((video) => (
              <li key={video.id.videoId} className="mb-4">
                <a href={`/watch?v=${video.id.videoId}`} className="flex items-start">
                  <img
                    src={video.snippet.thumbnails.medium.url}
                    alt={video.snippet.title}
                    className="mr-4 rounded-lg"
                    width="120"
                  />
                  <div>
                    <p className="font-semibold">{video.snippet.title}</p>
                    <p className="text-sm text-gray-600">{video.snippet.channelTitle}</p>
                  </div>
                </a>
              </li>
            ))
          ) : (
            <p>Loading related videos...</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default WatchPage;


