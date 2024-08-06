import { useState } from "react";

export const Todo = () => {
  const [todos, addTodos] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    addTodos([...todos, e.target[0].value]);
    console.log(todos);
  }
  return (
    <div>
      <h5>Todo Application</h5>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="add a todo" />
        <button type="submit">add</button>
      </form>
      {todos.map((elt, i) => {
        return (
          <div key={i}>
            <p>{elt}</p>
          </div>
        );
      })}
    </div>
  );
};
