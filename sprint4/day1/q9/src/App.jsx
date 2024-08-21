import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { YouTubeSearch } from "./YoutubeSearch";
import { Navbar } from "./Navbar";
import { AllRoutes } from "./routes/AllRoutes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <AllRoutes />
    </>
  );
}

export default App;
