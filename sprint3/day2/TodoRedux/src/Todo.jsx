import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./redux/action";

export const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleAddTodo = () => {
    const title = prompt("Enter todos");
    if (title) {
      dispatch(addTodo(title));
    }
  };

  const handleDeleteTodo = (title) => {
    dispatch(deleteTodo(title));
  };

  return (
    <div>
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.title}
            <button onClick={() => handleDeleteTodo(todo.title)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
