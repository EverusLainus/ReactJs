import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "3vw",
        width: "100%",
        backgroundColor: "black",
      }}
    >
      <NavLink to="/">Home</NavLink>
      <NavLink to="/quiz">Quiz</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/signup">SignUp</NavLink>
    </div>
  );
};
