import { useReducer } from "react";

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleToggle = (str) => {
    if (str == "inc") {
      dispatch({ type: "INCREMENT" });
    }
    if (str == "dec") {
      dispatch({ type: "DECREMENT" });
    }
  };
  return (
    <div className={state.theme}>
      <h1>change theme</h1>
      <button
        onClick={() => {
          handleToggle("inc");
        }}
      >
        INC
      </button>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          handleToggle("dec");
        }}
      >
        DEC
      </button>
    </div>
  );
};
