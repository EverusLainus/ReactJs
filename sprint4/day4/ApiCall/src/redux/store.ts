import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { FetchAction, FetchState } from "./actionType";
import { reducer } from "./reducer";
import { thunk, ThunkDispatch, ThunkMiddleware } from "redux-thunk";

export interface RootState {
  fetch: FetchState;
}

const rootReducer = combineReducers<RootState>({
  fetch: reducer as any,
});

export type AppState = ReturnType<typeof rootReducer>;

const middleware: ThunkMiddleware<AppState, FetchAction> = thunk;

export const store = legacy_createStore<AppState, FetchAction>(
  rootReducer,
  applyMiddleware(middleware)
);

export type AppDispatch = ThunkDispatch<RootState, void, FetchAction>;
