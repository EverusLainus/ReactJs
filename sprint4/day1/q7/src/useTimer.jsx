import { useEffect } from "react";
import { useReducer } from "react";
import { useState } from "react";

const initialState = {
  time: 50,
  isRunning: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "START_TIMER":
      return {
        ...state,
        isRunning: true,
      };
    case "STOP_TIMER":
      return {
        ...state,
        isRunning: false,
      };
    case "RESET_TIMER":
      return {
        ...state,
        time: 50,
        isRunning: false,
      };
    case "CLOCK_TICK":
      return {
        ...state,
        time: state.time > 0 ? state.time - 1 : 0,
      };
    default:
      return state;
  }
};

export const useTimer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    var timer;
    if (state.isRunning && state.time > 0) {
      timer = setInterval(() => {
        dispatch({ type: "CLOCK_TICK" });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [state.isRunning, state.time]);
  return [state, dispatch];
};
