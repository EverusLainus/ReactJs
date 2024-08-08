import { useState } from "react";
import { useRef } from "react";

export const Form = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [submit, setSubmit] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value + " " + e.target[1].value);
    setSubmit(true);
    setName(e.target[0].value);
    setEmail(e.target[1].value);
  };

  const handleNameChange = (e) => {
    e.preventDefault();
    if (e.target.value.length < 2) {
      setNameError(" Name should have atleast 2 characters");
    } else {
      setNameError("");
    }
  };

  const handleEmailChange = (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(e.target.value)) {
      setEmailError("enter valid email");
    } else {
      setEmailError("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          ref={nameRef}
          onChange={handleNameChange}
          type="text"
          placeholder="Enter your name"
        />
        <p>{nameError}</p>
        <input
          ref={emailRef}
          onChange={handleEmailChange}
          type="text"
          placeholder="Enter your email"
        />
        <p>{emailError}</p>
        <button type="submit">submit</button>
      </form>
      {submit && (
        <p>
          {name}
          <br />
          {email}
        </p>
      )}
    </div>
  );
};
