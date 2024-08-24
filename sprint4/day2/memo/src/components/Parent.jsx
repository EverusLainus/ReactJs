import { useState, useRef, useCallback } from "react";
import { Counter } from "./Counter";
import { Timer } from "./Timer";

export const Parent = () => {
  console.log("parent renders");
  const [count, setCount] = useState(0);
  console.log("counter renders");

  const [time, setTime] = useState(0);
  var intervalRef = useRef();
  console.log("timer renders");

  const handleStart = useCallback(() => {
    intervalRef.current = setInterval(() => {
      setTime((pre) => pre + 1);
    }, 1000);
  }, [time]);

  const handleStop = () => {
    clearInterval(intervalRef.current);
    setTime(0);
  };

  const handlePause = useCallback(() => {
    clearInterval(intervalRef.current);
  }, []);

  const increase = useCallback(() => {
    setCount((pre) => pre + 1);
  }, [count]);

  const decrease = useCallback(() => {
    setCount((pre) => pre - 1);
  }, [count]);
  return (
    <div>
      <Counter increase={increase} decrease={decrease} count={count} />
      <br />
      <Timer
        handleStart={handleStart}
        handleStop={handleStop}
        handlePause={handlePause}
        time={time}
      />
    </div>
  );
};
