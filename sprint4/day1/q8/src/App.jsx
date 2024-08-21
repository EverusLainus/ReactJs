import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useToggleItems } from "./UseToggleItems";

function App() {
  var arr = ["B", "C", "D", "A"];
  const [currentState, toggleState] = useToggleItems(arr, 1);

  return (
    <div>
      <h1>{arr[currentState - 1]}</h1>
      <button
        onClick={() => {
          toggleState();
        }}
      >
        Show Next
      </button>
    </div>
  );
}

export default App;
