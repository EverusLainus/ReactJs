import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export const NavBar = () => {
  const navigate = useNavigate();
  const { isAuth, setIsAuth } = useContext(AuthContext);
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
          isAuth ? navigate("/products") : navigate("/login");
        }}
      >
        Products
      </button>
      <button
        onClick={() => {
          navigate("/contact");
        }}
      >
        Contact
      </button>
      <button
        onClick={() => {
          if (!isAuth) {
            //not a user: login
            navigate("/login");
          } else {
            // user: logour
            setIsAuth(false);
          }
        }}
      >
        {isAuth ? "Logout" : "Login"}
      </button>
    </div>
  );
};
