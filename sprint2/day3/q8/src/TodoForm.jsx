import { useContext, useEffect } from "react";
import { FetchContext } from "./FetchContext";
import axios from "axios";
const url = import.meta.env.VITE_API_KEY;

export const TodoForm = () => {
  const { data, fetchData } = useContext(FetchContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    var obj = {
      title: e.target[0].value,
      description: e.target[1].value,
      due_date: e.target[2].value,
    };

    axios
      .post(`${url}/Tasks.json`, obj)
      .then((res) => {
        fetchData();
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="title" />
        <input type="text" placeholder="description" />
        <input type="date" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
