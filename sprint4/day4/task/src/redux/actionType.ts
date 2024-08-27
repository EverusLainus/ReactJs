export interface TodoType {
  id?: string | number;
  title: string;
  status: boolean;
}

export interface TodoState {
  isLoading: boolean;
  isError: boolean;
  todos: TodoType[];
}

export enum TodoActionType {
  GET_TODO = "GET_TODO",
  POST_TODO = "POST_TODO",
  LOADING = "LOADING",
  ERROR = "ERROR",
  TOGGLE_TODO = "TOGGLE_TODO",
}

interface getTodoAction {
  type: TodoActionType.GET_TODO;
  payload: TodoType[];
}

interface postTodoAction {
  type: TodoActionType.POST_TODO;
}

interface loadingTodoAction {
  type: TodoActionType.LOADING;
}

interface errorTodoAction {
  type: TodoActionType.ERROR;
}

interface toggleTodoAction {
  type: TodoActionType.TOGGLE_TODO;
}

export type TodoAction =
  | getTodoAction
  | postTodoAction
  | loadingTodoAction
  | errorTodoAction
  | toggleTodoAction;
