import { GET_FAILED, GET_SUCCESS, LOADING } from "./actionType";

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
  history: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_SUCCESS:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    case GET_FAILED:
      return {
        ...state,
        isError: false,
      };
    default:
      return state;
  }
};
