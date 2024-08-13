import { useReducer } from "react";

const initialState = {
  theme: "light",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "light":
      return {
        theme: "dark",
      };
    case "dark":
      return {
        theme: "light",
      };
    default:
      return state;
  }
};

export const Toggle = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleToggle = () => {
    if (state.theme == "light") {
      dispatch({ type: "light" });
    }
    if (state.theme == "dark") {
      dispatch({ type: "dark" });
    }
  };
  return (
    <div className={state.theme}>
      <h1>change theme</h1>
      <button onClick={handleToggle}>
        Change theme to {state.theme == "light" ? "dark" : "light"}{" "}
      </button>
    </div>
  );
};
