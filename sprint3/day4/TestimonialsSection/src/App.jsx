import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { CardGrid } from "./components/Cards";
import { NavBar } from "./components/NavBar";
import WithSpeechBubbles, { TestimonialAvatar } from "./Testimonial";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />

      <WithSpeechBubbles />
    </>
  );
}

export default App;
