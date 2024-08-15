import { Post } from "./Post";
import { useContext, useEffect } from "react";
import { PostContext } from "./PostContext";

export const Display = () => {
  const { post, addPost } = useContext(PostContext);
  useEffect(() => {}, [post, addPost]);
  console.log("display");
  return (
    <div className="display">
      {post.map((elt, i) => {
        return (
          <div key={i}>
            <Post name={elt.name} des={elt.description} likes={elt.likes} />
          </div>
        );
      })}
    </div>
  );
};
