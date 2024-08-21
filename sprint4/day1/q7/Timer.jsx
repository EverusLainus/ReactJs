import { useTimer } from "./src/useTimer";

export const Timer = () => {
  const [state, dispatch] = useTimer();
  return (
    <div>
      <h1>{state.time}</h1>
      <button
        onClick={() => {
          dispatch({ type: "START_TIMER" });
        }}
      >
        start
      </button>
      <button
        onClick={() => {
          dispatch({ type: "STOP_TIMER" });
        }}
      >
        stop
      </button>
      <button
        onClick={() => {
          dispatch({ type: "RESET_TIMER" });
        }}
      >
        reset
      </button>
    </div>
  );
};
