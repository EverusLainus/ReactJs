import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>
      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        About
      </button>
      <button
        onClick={() => {
          navigate("/products");
        }}
      >
        Products
      </button>
      <button
        onClick={() => {
          navigate("/productsdisplay");
        }}
      >
        Products Display
      </button>
    </div>
  );
};
