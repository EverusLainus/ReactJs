import { TodoAction, TodoActionType, TodoType } from "./actionType";
import { AppDispatch } from "./store";
import axios from "axios";

export const getTodoAction = (payload: TodoType[]): TodoAction => ({
  type: TodoActionType.GET_TODO,
  payload,
});

export const loadingTodoAction = (): TodoAction => ({
  type: TodoActionType.LOADING,
});

export const errorTodoAction = (): TodoAction => ({
  type: TodoActionType.ERROR,
});

export const postTodoAction = (): TodoAction => ({
  type: TodoActionType.POST_TODO,
});

export const toggleTodoAction = (): TodoAction => ({
  type: TodoActionType.TOGGLE_TODO,
});

const url = "http://localhost:3000/todos";

export const getData = () => (dispatch: AppDispatch) => {
  dispatch(loadingTodoAction());
  axios
    .get(url)
    .then((res) => {
      console.log(res.data);
      dispatch(getTodoAction(res.data));
    })
    .catch((err) => {
      console.log(err);
      dispatch(errorTodoAction());
    });
};

export const postData =
  ({ payload }: { payload: TodoType }) =>
  (dispatch: AppDispatch) => {
    dispatch(loadingTodoAction());
    axios
      .post(url, payload)
      .then((res) => {
        console.log(res.data);
        dispatch(getTodoAction(res.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(errorTodoAction());
      });
  };
