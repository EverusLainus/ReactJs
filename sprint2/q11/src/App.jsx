import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Form } from "./Form";
import { Display } from "./Display";

function App() {
  return (
    <div>
      <Form />
      <Display />
    </div>
  );
}

export default App;
