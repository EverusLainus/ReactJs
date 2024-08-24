import { useState, useRef, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [time, settime] = useState(0);
  const [posts, addPost] = useState([]);
  const timeRef = useRef();
  const titleRef = useRef();
  const bodyRef = useRef();
  useEffect(() => {
    timeRef.current = setInterval(() => {
      settime((pre) => pre + 1);
    }, 1000);
    console.log(posts);
  }, [posts]);

  function handlePost(e) {
    e.preventDefault();
    var obj = {
      title: titleRef.current.value,
      body: bodyRef.current.value,
    };
    addPost([...posts, obj]);
    console.log(posts);
  }

  return (
    <div>
      <h1>time: {time}</h1>
      <form action="" onSubmit={handlePost}>
        <input ref={titleRef} name="title" type="text" placeholder="title" />
        <input ref={bodyRef} name="body" type="text" placeholder="body" />
        <button type="submit">add post</button>
      </form>
      {posts &&
        posts.map((elt, i) => {
          return (
            <div
              key={i}
              style={{
                backgroundColor: `#${Math.floor(
                  Math.random() * 16777215
                ).toString(16)}`,
              }}
            >
              <h1>elt.title</h1>
              <p>elt.body</p>
            </div>
          );
        })}
    </div>
  );
}

export default App;
