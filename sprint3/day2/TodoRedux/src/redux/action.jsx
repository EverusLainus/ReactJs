export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const MARK_COMPLETED = "MARK_COMPLETED";

export const addTodo = (title) => ({
  type: ADD_TODO,
  payload: title,
});

export const deleteTodo = (title) => ({
  type: DELETE_TODO,
  payload: title,
});

export const markCompleted = () => ({
  type: MARK_COMPLETED,
});
