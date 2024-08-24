import { useRef, useState } from "react";

export const Timer = () => {
  const [time, setTime] = useState(0);
  var intervalRef = useRef();
  console.log("timer renders");

  function handleStart() {
    intervalRef.current = setInterval(() => {
      setTime((pre) => pre + 1);
    }, 1000);
  }
  function handleStop() {
    console.log("handle stop");
    clearInterval(intervalRef.current);
    console.log(time);
    setTime(time);
  }
  function handlePause() {
    console.log("handle pause");
    clearInterval(intervalRef.current);
  }

  return (
    <div>
      <h1>{time}</h1>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={handlePause}>pause</button>
    </div>
  );
};
