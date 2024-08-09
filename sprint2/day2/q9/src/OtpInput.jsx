import { useState } from "react";
import { useEffect, useRef } from "react";

export const OtpInput = () => {
  const inputs = useRef([]);
  const [atEnd, setAtEnd] = useState(false);
  const [values, setValues] = useState(["", "", "", "", "", ""]);

  const handleChange = (e, idx) => {
    const newValues = [...values];
    newValues[idx] = e.target.value;
    setValues(newValues);
    if (e.target.value.length == 1) {
      var next = e.target.nextElementSibling;
      if (next) {
        next.focus();
      }
      if (next == 5) {
        setAtEnd(true);
        console.log(atEnd);
      }
    }
    console.log(inputs.current[0].value);
  };

  const handleKeyDown = (e) => {
    if (e.key == "Backspace") {
      var next = e.target.previousElementSibling;
      if (next) {
        next.focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.length);
    console.log(values.join(" "));
    setAtEnd(true);
  };

  const handlePaste = (e, index) => {
    e.preventDefault();

    const pasteData = e.clipboardData.getData("text").slice(0, 6);
    console.log(pasteData);
    const newValues = [...values];

    for (let i = 0; i < pasteData.length; i++) {
      if (index + i < newValues.length) {
        newValues[index + i] = pasteData[i];
      }
    }
    setValues(newValues);
  };

  useEffect(() => {}, []);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {Array(6)
          .fill()
          .map((_, index) => (
            <input
              key={index}
              type="text"
              value={values[index]}
              maxLength={1}
              ref={(el) => (inputs.current[index] = el)}
              onChange={(e) => {
                handleChange(e, index);
              }}
              onKeyDown={handleKeyDown}
              onPaste={(e) => {
                handlePaste(e, index);
              }}
            />
          ))}
        {atEnd && <button type="submit">submit</button>}

        {/* {<div>
          
          <span>{inputs.current[1].value}</span>
          <span>{inputs.current[2].value}</span>
          <span>{inputs.current[3].value}</span>
          <span>{inputs.current[4].value}</span>
          <span>{inputs.current[5].value}</span>
        </div>} */}
        <div>
          <span>Values: {values.join(" ")}</span>
        </div>
      </form>
    </div>
  );
};
