import { useDispatch, useSelector } from "react-redux";

export const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Inc</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Dec</button>
    </div>
  );
};
