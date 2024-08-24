import { useRef, useState, useCallback } from "react";

export const Form = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const [errors, setErrors] = useState({});

  const validate = useCallback(() => {
    const errors = {};
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (!name) {
      errors.name = "name is required";
    } else if (name.length < 3) {
      errors.name = "names should be at least of length 3";
    }

    if (!email) {
      errors.email = "email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "invalid email";
    }

    if (!password) {
      errors.password = "password is required";
    } else if (password.length < 6) {
      errors.password = "password should be at least of length 6";
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = "passwords do not match";
    }

    return errors;
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const validateResult = validate();
      console.log(validateResult);

      if (Object.keys(validateResult).length === 0) {
        console.log("form is valid");
      } else {
        setErrors(validateResult);
        console.log("form is invalid");
      }
    },
    [validate]
  );

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid black",
        padding: "10px",
      }}
    >
      <input ref={nameRef} type="text" placeholder="name" />
      {errors.name && <p>{errors.name}</p>}
      <input ref={emailRef} type="text" placeholder="email" />
      {errors.email && <p>{errors.email}</p>}
      <input ref={passwordRef} type="password" placeholder="password" />
      {errors.password && <p>{errors.password}</p>}
      <input
        ref={confirmPasswordRef}
        type="password"
        placeholder="confirm password"
      />
      {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
      <button type="submit" onClick={handleSubmit}>
        submit
      </button>
    </form>
  );
};
