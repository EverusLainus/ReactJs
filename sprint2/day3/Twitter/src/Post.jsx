import { useContext, useEffect, useState, useRef } from "react";
import { PostContext } from "./PostContext";

export const Post = ({ name, des, likes }) => {
  const { post, likePost, addComment } = useContext(PostContext);
  const [commentInput, setCommentInput] = useState(false);
  const [commentNow, setCommentNow] = useState("");
  const commentRef = useRef(null);

  const handleLike = (name) => {
    likePost(name);
  };
  const handleComment = (name) => {
    console.log(name, commentRef.current);
    addComment(name, commentRef.current);
  };
  console.log("Post");
  useEffect(() => {}, [post]);

  return (
    <div className="card">
      <h6>{des}</h6>
      <p>{name}</p>
      <p>
        <b>like count: </b>
        {likes}
      </p>
      <button
        onClick={() => {
          handleLike(name);
        }}
      >
        like
      </button>
      <button
        onClick={() => {
          handleComment(name);
          setCommentInput(true);
        }}
      >
        comment
      </button>
      {commentInput && (
        <input
          ref={commentRef}
          onChange={(e) => {
            handleComment(e.target.value);
          }}
          type="text"
          placeholder="add a comment"
        />
      )}
      {commentInput}
    </div>
  );
};
