export const TodoItem = ({ i, elt }) => {
  return (
    <div key={i} className="card">
      {elt.title}
    </div>
  );
};
