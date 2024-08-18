import { useDispatch, useSelector } from "react-redux";
import { store } from "./redux/store";
import { decrement, increment } from "./redux/action";

export const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        inc
      </button>
      {count}
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        dec
      </button>
    </div>
  );
};
