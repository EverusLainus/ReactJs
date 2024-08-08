import axios from "axios";
import { useEffect, useState } from "react";
const url =
  "https://taskmanager-14768-default-rtdb.asia-southeast1.firebasedatabase.app/Tasks";
export const Display = () => {
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    axios
      .get(`${url}/.json`)
      .then((res) => {
        var arr = Object.entries(res.data);
        console.log(arr);
        setData(arr);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [update]);

  const handleDel = (key) => {
    axios
      .delete(`${url}/${key}.json`)
      .then((res) => {
        console.log(res);
        setUpdate((prev) => !prev);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEdit = (key, value) => {
    var newTitle = prompt("enter new Title", value.title);
    var newDes = prompt("enter new Description", value.description);
    var obj = {
      ...value,
      title: newTitle,
      description: newDes,
    };
    axios
      .patch(`${url}/${key}.json`, obj)
      .then((res) => {
        console.log(res);
        setUpdate((prev) => !prev);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="TodoGrid">
      {data.map(([key, value], i) => {
        console.log(value);
        return (
          <div key={i} className="TodoCard">
            <h5>{value.title}</h5>
            <p>{value.description}</p>
            <p>{value.due_date}</p>
            <button
              onClick={() => {
                handleEdit(key, value);
              }}
            >
              Edit Task
            </button>
            <button
              onClick={() => {
                handleDel(key);
              }}
            >
              Delete Task
            </button>
          </div>
        );
      })}
    </div>
  );
};
