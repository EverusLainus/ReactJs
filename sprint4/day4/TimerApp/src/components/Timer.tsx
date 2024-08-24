import { useRef, useState } from "react";

export const Timer = () => {
  const [time, setTime] = useState(60);
  const intervalRef = useRef<number>();
  function handleStart(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    intervalRef.current = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
  }

  function handleStop(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    clearInterval(intervalRef.current);
  }
  function handleReset(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    clearInterval(intervalRef.current);
    setTime(60);
  }

  return (
    <div>
      <h1>{time}</h1>
      <p>Elapsed Time: {60 - time}</p>
      <button onClick={handleStart}>start</button>
      <button onClick={handleReset}>reset</button>
      <button onClick={handleStop}>stop</button>
    </div>
  );
};
