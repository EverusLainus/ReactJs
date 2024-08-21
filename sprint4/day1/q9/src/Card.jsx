import React, { useState } from "react";
import { usePlaylist } from "./PlaylistProvider";

export const Card = ({ video }) => {
  const [showDetails, setShowDetails] = useState(false);
  const { playlist, addVideoToPlaylist, removeVideoFromPlaylist } =
    usePlaylist();

  const isInPlaylist = playlist.some((item) => item === video.snippet.title);

  const handleWishlistToggle = () => {
    if (isInPlaylist) {
      removeVideoFromPlaylist(video);
    } else {
      addVideoToPlaylist(video);
    }
  };

  return (
    <>
      <h3>{video.snippet.title}</h3>
      <p>{video.snippet.description}</p>
      <img
        src={video.snippet.thumbnails.default.url}
        alt={video.snippet.title}
      />
      <button
        onClick={() => {
          setShowDetails((prev) => !prev);
        }}
      >
        {showDetails ? "Hide Details" : "View More Details"}
      </button>
      {showDetails && <h3>{video.snippet.channelId}</h3>}
      <button
        onClick={() => {
          handleWishlistToggle(video);
        }}
      >
        {isInPlaylist ? "Remove from Playlist" : "Add to Playlist"}
      </button>
    </>
  );
};
