import App from "../App";
import { PlayList } from "../PlayList";
import { Routes, Route } from "react-router-dom";
import { YouTubeSearch } from "../YoutubeSearch";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<YouTubeSearch />} />
        <Route path="/playlist" element={<PlayList />} />
      </Routes>
    </div>
  );
};
