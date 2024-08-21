import React, { useState } from "react";
import axios from "axios";
import { Card } from "./Card";

const YOUTUBE_API_URL = "https://www.googleapis.com/youtube/v3/search";

export function YouTubeSearch() {
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState("");

  const searchYouTube = async () => {
    try {
      const response = await axios.get(YOUTUBE_API_URL, {
        params: {
          part: "snippet",
          q: query,
          maxResults: 5,
          key: import.meta.env.VITE_GOOGLE_API,
        },
      });
      setVideos(response.data.items);
    } catch (error) {
      console.error("Error fetching YouTube videos:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search YouTube"
      />
      <button onClick={searchYouTube}>Search</button>

      <div>
        {videos.map((video) => {
          console.log(video);
          return (
            <div key={video.id.videoId}>
              <Card video={video} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
