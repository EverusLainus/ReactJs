import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer } from "./reducer";
import { thunk } from "redux-thunk";
import { logger } from "redux-logger";

const rootReducer = combineReducers({
  app: reducer,
});
export const store = legacy_createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
);
