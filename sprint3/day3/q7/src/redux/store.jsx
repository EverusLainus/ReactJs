import { applyMiddleware, combineReducers } from "redux";
import { legacy_createStore } from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import { fetchReducer } from "./fetchReducer";

export const reducer = combineReducers({
  fetch: fetchReducer,
});
export const store = legacy_createStore(
  reducer,
  applyMiddleware(thunk, logger)
);
