import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import { formReducer } from "./formReducer";

const rootReducer = combineReducers({
  form: formReducer,
});

export const store = legacy_createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
);
