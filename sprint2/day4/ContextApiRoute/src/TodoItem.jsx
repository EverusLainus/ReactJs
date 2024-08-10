export const TodoItem = ({ key, i, elt }) => {
  return (
    <div key={i} className="card">
      {elt.title}
    </div>
  );
};
