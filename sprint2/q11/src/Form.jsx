import { useRef } from "react";
import axios from "axios";

const url =
  "https://taskmanager-14768-default-rtdb.asia-southeast1.firebasedatabase.app/Tasks.json";
export const Form = () => {
  /*
  const titleRef = useRef(null);
  const desRef = useRef(null);
  const dateRef = useRef(null);*/

  const handleForm = (e) => {
    e.preventDefault();

    var obj = {
      title: e.target[0].value,
      description: e.target[1].value,
      due_date: e.target[2].value,
    };

    axios
      .post(url, obj)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div onSubmit={handleForm}>
      <form>
        <input type="text" placeholder="Enter a Title" />
        <input type="text" placeholder="Enter a Description" />
        <input type="date" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
