export interface FetchType {
  id: number;
  title: string;
  price: number;
  description: string;
}

export interface FetchState {
  isLoading: boolean;
  isError: boolean;
  data: FetchType[];
}

export enum FetchActionType {
  FETCH_DATA = "FETCH_DATA",
  LOADING = "LOADING",
  ERROR = "ERROR",
}

interface getFetchAction {
  type: FetchActionType.FETCH_DATA;
  payload: FetchType[];
}

interface loadingFetchAction {
  type: FetchActionType.LOADING;
}

interface errorFetchAction {
  type: FetchActionType.ERROR;
}

export type FetchAction =
  | getFetchAction
  | loadingFetchAction
  | errorFetchAction;
