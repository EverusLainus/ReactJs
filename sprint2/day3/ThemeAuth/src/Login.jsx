import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { isAuth, authenticate } = useContext(AuthContext);
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    authenticate(e.target[0].value, e.target[1].value);
    if (isAuth) navigate("/products");
  }
  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Enter your email" />
        <input type="text" placeholder="Enter your password" />
        <button>Submit</button>
      </form>
    </div>
  );
};
