import { createContext, useState } from "react";

export const PostContext = createContext();
export const PostContextProvider = ({ children }) => {
  const [post, setPost] = useState([]);
  const addPost = (name, des) => {
    var obj = {
      name: name,
      description: des,
      likes: 0,
      comments: [],
    };
    console.log(obj);
    console.log("after add: ", post);
    setPost((prevPost) => [...prevPost, obj]);

    console.log("after add: ", post);
  };

  const likePost = (name) => {
    const updatedPosts = post.map((elt) => {
      if (elt.name === name) {
        return {
          ...elt,
          likes: (elt.likes || 0) + 1,
        };
      }
      return elt;
    });

    setPost(updatedPosts);
  };

  const addComment = (name, comment) => {
    const updatedPosts = post.map((elt) => {
      if (elt.name === name) {
        return {
          ...elt,
          comments: [elt.comment, comment],
        };
      }
      return elt;
    });
    setPost(updatedPosts);
  };

  console.log("Post context");
  return (
    <PostContext.Provider value={{ post, addPost, likePost, addComment }}>
      {children}
    </PostContext.Provider>
  );
};
