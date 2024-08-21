import { useState } from "react";

export const useToggleItems = (arr, initialPosition = 1) => {
  const [currentState, setCurrentState] = useState(initialPosition);

  const toggleState = () => {
    console.log(typeof arr);
    var n = arr.length;
    if (currentState === n) {
      setCurrentState(1);
    } else {
      setCurrentState(currentState + 1);
    }
  };

  return [currentState, toggleState];
};
