import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { getData, postData } from "../redux/action";
import { Display } from "./Display";
import { useEffect } from "react";

export const Form = () => {
  const dispatch: AppDispatch = useDispatch();

  const { isLoading, isError, todos } = useSelector(
    (state: RootState) => state.todo
  );

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formdata = new FormData(form);
    console.log(e.currentTarget);

    const data = {
      title: formdata.get("title") as string,
      status: formdata.get("status") === "true",
    };
    console.log("post from form");
    dispatch(postData({ payload: data }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="title" type="text" placeholder="Enter a Task" />
        <select name="status" id="status">
          <option value="">select the status</option>
          <option value="true">completed</option>
          <option value="false">pending</option>
        </select>
        <button type="submit">Add</button>
      </form>
      <Display todos={todos} />
    </div>
  );
};
