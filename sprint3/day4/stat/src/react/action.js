import { LOADING, GET_FAILED, GET_SUCCESS } from "./actionType";
export const loadingAction = () => ({ type: LOADING });
export const getSuccessAction = () => ({ type: GET_SUCCESS });
export const getFailedAction = () => ({ type: GET_FAILED });
