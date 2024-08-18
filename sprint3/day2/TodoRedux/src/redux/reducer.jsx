import { ADD_TODO, DELETE_TODO } from "./action";

export const initialState = {
  todos: [{ title: "", status: false }],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { title: payload, status: false }],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.title !== payload),
      };
    default:
      return state;
  }
};
