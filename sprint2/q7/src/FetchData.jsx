import { useEffect, useState } from "react";

export const FetchData = () => {
  const [data, setData] = useState([]);
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const url = "https://jsonplaceholder.typicode.com/todos";
  useEffect(() => {
    fetch(url)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((d) => {
        console.log(d);
        setData(d);
      })
      .catch((err) => {
        console.log(err);
      });
    document.addEventListener("mousemove", logKey);

    function logKey(e) {
      setX(e.screenX);
      setY(e.screenY);
    }
    document.title = "documentDidMount";

    return () => {
      document.title = "documentDidUnmount";
    };
  }, []);
  return (
    <div>
      <h3>
        {x}: {y}
      </h3>
      <div className="cardGrid">
        {data.map((elt, i) => {
          return (
            <div className="card" key={i}>
              {elt.title}
            </div>
          );
        })}
      </div>
    </div>
  );
};
