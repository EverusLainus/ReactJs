import { TodoActionType, TodoState, TodoAction } from "./actionType";

const initState = {
  isLoading: false,
  isError: false,
  todos: [],
};

export const reducer = (
  state: TodoState = initState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case TodoActionType.GET_TODO:
      return {
        ...state,
        isLoading: false,
        isError: false,
        todos: Array.isArray(action.payload) ? action.payload : [],
      };
    case TodoActionType.LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case TodoActionType.TOGGLE_TODO:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case TodoActionType.ERROR:
      return {
        ...state,
        isError: true,
      };
    default:
      return state;
  }
};
