import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { TodoAction, TodoState } from "./actionType";
import { reducer } from "./reducer";
import { thunk, ThunkDispatch, ThunkMiddleware } from "redux-thunk";

export interface RootState {
  todo: TodoState;
}

const RootReducer = combineReducers<RootState>({
  todo: reducer as any,
});

const middleware = [thunk as ThunkMiddleware<RootState>];

export const store = legacy_createStore(
  RootReducer,
  applyMiddleware(...middleware)
);

export type AppStore = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, void, TodoAction>;
