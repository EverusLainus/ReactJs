import { useDispatch } from "react-redux";
import { TodoType } from "../redux/actionType";
import { AppDispatch } from "../redux/store";
import { postData } from "../redux/action";

interface DisplayProps {
  todos: TodoType[];
}

export const Display: React.FC<DisplayProps> = ({ todos }) => {
  const dispatch: AppDispatch = useDispatch();

  const handleToggle = (el: TodoType) => {
    const value: boolean = !el.status;
    const data = {
      title: el.title as string,
      status: value,
    };
    console.log("post from display");
    dispatch(postData({ payload: data }));
  };
  return (
    <div>
      {todos &&
        todos.map((el) => {
          return (
            <div key={el.id}>
              <h4>{el.title}</h4>
              <p>{el.status ? "completed" : "pending"}</p>
              <button
                onClick={() => {
                  handleToggle(el);
                }}
              >
                {el.status ? "mark as incomplete" : "mark as complete"}
              </button>
            </div>
          );
        })}
    </div>
  );
};
