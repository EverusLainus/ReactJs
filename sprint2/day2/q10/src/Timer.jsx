import { useEffect, useRef, useState } from "react";
export const Timer = () => {
  const [tim, setTime] = useState(0);
  const [remain, setRemain] = useState(0);
  const startRef = useRef(null);
  const idRef = useRef(null);
  const handleStart = () => {
    setRemain(0);
    idRef.current = setInterval(() => {
      setTime((prev) => {
        if (prev > 0) {
          setRemain(startRef.current.value);
          console.log({ remain });
          return prev - 1;
        } else {
          setRemain(0);
          clearInterval(idRef.current);
          return 0;
        }
      });
    }, 1000);
  };

  function handleInput() {
    setTime(startRef.current.value);
  }
  function handlePause() {
    setTime(tim);
    if (tim != 0) {
      clearTimeout(idRef.current);
    }
  }
  function handleReset() {
    clearTimeout(startRef.current);
    setTime(startRef.current.value);
  }

  return (
    <div className={remain <= 10 ? "light" : "dark"}>
      <h1>{tim}</h1>
      <input
        ref={startRef}
        type="text"
        placeholder="Set a timer"
        onChange={handleInput}
      />
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReset}>Reset</button>
      <h1>remain: {tim}</h1>
      <div className="progress" style={{ width: startRef.current * 200 }}>
        <div className="done" style={{ width: tim * 200 }}></div>
      </div>
    </div>
  );
};
