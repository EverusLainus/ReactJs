import { useContext } from "react";
import { PostContext } from "./PostContext";

export const Form = () => {
  const { addPost } = useContext(PostContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(e.target[0].value, e.target[1].value);
    addPost(e.target[0].value, e.target[1].value);
  };
  console.log("form");
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your username" />
        <input type="text" placeholder="Enter post description" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
