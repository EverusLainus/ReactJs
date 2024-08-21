import React from "react";
import { usePlaylist } from "./PlaylistProvider";
import { Card } from "./Card"; // Adjust the import path as needed

export const PlayList = () => {
  const { playlist } = usePlaylist();

  return (
    <div>
      <h2>My Playlist</h2>
      <ul>
        {playlist.map((video) => (
          <li key={video}>
            <h2>{video}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};
