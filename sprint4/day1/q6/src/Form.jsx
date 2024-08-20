import { useInput } from "./useInput";

export const Form = () => {
  const [name, handleName] = useInput("");
  const [password, handlePassword] = useInput("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          type="text"
          onChange={handleName}
          placeholder="name"
        />
        <input
          value={password}
          type="text"
          onChange={handlePassword}
          placeholder="password"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
