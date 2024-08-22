import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../redux/action";

export const Test = () => {
  const { questions, error } = useSelector((state) => state.fetch);
  const [selectedOptionId, setSelectedOptionId] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleOptionClick = (optionId, correctId) => {
    setSelectedOptionId(optionId);
    console.log(optionId, correctId);
    if (optionId === correctId) {
      console.log("correct");

      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };
  const dispatch = useDispatch();
  console.log("test rerendered", questions);

  useEffect(() => {
    dispatch(fetchUserData());
    console.log(questions);
  }, [dispatch]);

  return (
    <div>
      <h1>Test Page</h1>
      {questions.length > 0 ? (
        questions.map((elt) => (
          <div key={elt.id}>
            <h3>Question:</h3>
            <p>{elt.question}</p>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1vw" }}
            >
              {elt.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(idx, elt.correctOptionIndex)}
                >
                  {option}
                </button>
              ))}
            </div>
            {isCorrect !== null && (
              <div>
                {isCorrect ? (
                  <p style={{ color: "green" }}>Correct!</p>
                ) : (
                  <p style={{ color: "red" }}>Incorrect, try again.</p>
                )}
              </div>
            )}
          </div>
        ))
      ) : (
        <p>No questions available.</p>
      )}
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};
