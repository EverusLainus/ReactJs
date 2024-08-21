import React, { createContext, useContext, useState } from "react";

const PlaylistContext = createContext();
export const usePlaylist = () => useContext(PlaylistContext);

export const PlaylistProvider = ({ children }) => {
  const [playlist, setPlaylist] = useState([]);

  const addVideoToPlaylist = (video) => {
    setPlaylist((prevPlaylist) => [...prevPlaylist, video.snippet.title]);
  };

  const removeVideoFromPlaylist = (videoId) => {
    setPlaylist((prevPlaylist) =>
      prevPlaylist.filter(
        (video) => video.snippet.title !== videoId.snippet.title
      )
    );
  };

  const clearPlaylist = () => {
    setPlaylist([]);
  };

  return (
    <PlaylistContext.Provider
      value={{
        playlist,
        addVideoToPlaylist,
        removeVideoFromPlaylist,
        clearPlaylist,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};
