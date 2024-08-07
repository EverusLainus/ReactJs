import { useState, useRef, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const btnRef = useRef(null);
  const inRef = useRef(null);
  const [val, setVal] = useState("");

  useEffect(() => {
    btnRef.current.focus();
  }, []);

  function handleClick() {
    btnRef.current.style.backgroundColor = "blue";
  }
  console.log(inRef.current);

  return (
    <>
      <div>
        <button ref={btnRef} onClick={handleClick}>
          focus
        </button>
        <input type="text" ref={inRef} />
        <p>{inRef.current}</p>
      </div>
    </>
  );
}

export default App;
