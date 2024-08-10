import { useContext, useEffect } from "react";
import { FetchContext } from "./FetchContext";

export const TodoList = () => {
  const { data, fetchData } = useContext(FetchContext);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="grid">
      {data.map(([i, elt]) => {
        console.log(elt);
        return (
          <div key={i} className="card">
            {elt.title}
          </div>
        );
      })}
    </div>
  );
};
