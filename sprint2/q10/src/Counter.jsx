import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  function handleInc() {
    setCount((pre) => pre + 1);
  }

  function handleDec() {
    setCount((pre) => pre - 1);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleInc}>inc</button>
      <button onClick={handleDec}>dec</button>
    </div>
  );
};
