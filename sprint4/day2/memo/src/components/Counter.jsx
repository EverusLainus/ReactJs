import { useState } from "react";
export const Counter = () => {
  const [time, setTime] = useState(0);
  console.log("counter renders");
  function increase() {
    setTime((pre) => pre + 1);
  }
  function decrease() {
    setTime((pre) => pre - 1);
  }
  return (
    <div>
      <h1>{time}</h1>
      <button onClick={increase}>inc</button>
      <button onClick={decrease}>dec</button>
    </div>
  );
};
