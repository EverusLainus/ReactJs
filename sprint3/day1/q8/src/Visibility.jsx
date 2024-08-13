import { useReducer } from "react";

const initialState = {
  isVisible: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_VISIBILITY":
      return {
        isVisible: state.isVisible ? "false" : "true",
      };
    default:
      return state;
  }
};

export const Visibility = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleToggle = () => {
    dispatch({ type: "TOGGLE_VISIBILITY" });
  };

  return (
    <div>
      <div className={state.isVisible ? "light" : "dark"}>
        <h1>hello world!</h1>
      </div>
      <button onClick={handleToggle}>Change Visibility</button>
    </div>
  );
};
