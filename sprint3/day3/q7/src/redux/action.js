import { store } from "./store";

export const fetchUserData = () => {
  return (dispatch) => {
    fetch(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        dispatch({ type: "FETCH_USER_SUCCESS", payload: data.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_USER_FAILURE", error });
      });
  };
};
store.dispatch(fetchUserData());
