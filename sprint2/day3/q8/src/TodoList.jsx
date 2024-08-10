import { useContext, useEffect } from "react";
import { FetchContext } from "./FetchContext";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const { data, fetchData } = useContext(FetchContext);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="grid">
      {data.map(([i, elt]) => {
        console.log(elt);
        return <TodoItem i={i} elt={elt} />;
      })}
    </div>
  );
};
