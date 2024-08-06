import { useEffect } from "react";
import { useState } from "react";

export const Timer = () => {
  const [time, setTime] = useState(0);
  const [id, setId] = useState(null);
  const [y, setY] = useState(0);
  function handleStart() {
    if (id == null) {
      var ID = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
      setId(ID);
    }
  }

  function handleStop() {
    if (id != null) {
      clearInterval(id);
      setId(null);
    }
  }

  useEffect(() => {
    document.addEventListener("scroll", (event) => {
      console.log(window.screenX + " " + window.scrollY);
      setY(window.screenY);
    });

    return () => {};
  }, []);
  return (
    <div>
      <h2>scroll coordinates: {y}</h2>
      <h1>{time}</h1>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
    </div>
  );
};
