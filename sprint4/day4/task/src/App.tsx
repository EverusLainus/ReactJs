import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Form } from "./component/Form";
import { Display } from "./component/Display";
import { getData } from "./redux/action";
import { AppDispatch, RootState } from "./redux/store";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const { isLoading, isError, todos } = useSelector(
    (state: RootState) => state.todo
  );
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <>
      <Form />
      <Display todos={todos} />
    </>
  );
}

export default App;
