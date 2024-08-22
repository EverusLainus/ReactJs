import { legacy_createStore, applyMiddleware } from "redux";

import logger from "redux-logger";

const initialState = {
  count: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export const store = legacy_createStore(reducer, applyMiddleware(logger));
