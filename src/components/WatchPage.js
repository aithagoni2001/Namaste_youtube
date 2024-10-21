import React, { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { CloseMenu } from "../utils/AppSlice";
import { useSearchParams } from "react-router-dom";
import { MY_API_KEY } from "../utils/Constants";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const [comments, setComments] = useState([]);

  const dispatch = useDispatch();

  // Fetch video comments (same logic as before)
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

  useEffect(() => {
    dispatch(CloseMenu());
    fetchVideoComments();
  }, [dispatch, fetchVideoComments]); // Dependencies for useEffect

  return (
    <div className="flex px-10 py-5">
      {/* Left side: Video */}
      <div className="flex-1 pr-8"> {/* Flex-1 ensures video takes as much space as possible */}
        <iframe
          className="rounded-xl w-full"
          width="830"
          height="450"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <div className="w-auto mt-6">
          <h3 className="text-xl font-semibold">Comments</h3>
          <ul>
            {Array.isArray(comments) && comments.length > 0 ? (
              comments.map((comment) => (
                <li key={comment.id} className="mt-4 px-2 w-auto border-t-2 border-solid border-gray-100">
                  <div className="flex"><img
                     className="h-10 cursor-pointer"
                     src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"
                     alt="profile-icon"/> <div className="px-2">
                  <p className="font-semibold">
                    {comment.snippet.topLevelComment.snippet.authorDisplayName}
                  </p>
                  <p>{comment.snippet.topLevelComment.snippet.textDisplay}</p></div></div>
                </li>
              ))
            ) : (
              <p>Loading comments...</p>
            )}
          </ul>
        </div>
      </div>

      {/* Right side: LiveChat */}
      <div > {/* Fixed width for LiveChat */}
        <LiveChat />
      </div>
    </div>
  );
};

export default WatchPage;
