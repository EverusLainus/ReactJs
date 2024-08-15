import { useState } from "react";
import "./App.css";
import { Form } from "./Form";
import { Display } from "./Display";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Form />
      <Display />
    </>
  );
}

export default App;
