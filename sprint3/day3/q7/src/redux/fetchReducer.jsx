const initialState = {
  questions: [],
  error: "",
};

export const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER_SUCCESS":
      return {
        ...state,
        questions: action.payload,
      };
    case "FETCH_USER_FAILURE":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
