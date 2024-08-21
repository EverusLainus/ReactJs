import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "2px",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/playlist">Playlist</Link>
    </div>
  );
};
