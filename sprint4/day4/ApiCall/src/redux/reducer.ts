import { FetchAction, FetchActionType, FetchState } from "./actionType";

const initState = {
  isLoading: false,
  isError: false,
  data: [],
};

export const reducer = (state: FetchState = initState, action: FetchAction) => {
  switch (action.type) {
    case FetchActionType.FETCH_DATA:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: Array.isArray(action.payload) ? action.payload : [],
      };
    case FetchActionType.LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case FetchActionType.ERROR:
      return {
        ...state,
        isError: true,
      };
    default:
      return state;
  }
};
