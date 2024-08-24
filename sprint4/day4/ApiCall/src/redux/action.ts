import axios from "axios";
import { FetchAction, FetchActionType, FetchType } from "./actionType";
import { AppDispatch } from "./store";

export const getFetchAction = (payload: FetchType[]): FetchAction => ({
  type: FetchActionType.FETCH_DATA,
  payload: payload,
});

export const loadingFetchAction = (): FetchAction => ({
  type: FetchActionType.LOADING,
});

export const errorFetchAction = (): FetchAction => ({
  type: FetchActionType.ERROR,
});

const url = "https://fakestoreapi.com/products";

export const fetchDaa = () => (dispatch: AppDispatch) => {
  dispatch(loadingFetchAction());
  axios
    .get(url)
    .then((res) => {
      console.log(res.data);
      dispatch(getFetchAction(res.data));
    })
    .catch((err) => {
      console.log(err);
      dispatch(errorFetchAction());
    });
};
