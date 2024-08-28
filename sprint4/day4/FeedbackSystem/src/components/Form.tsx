import { useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

export interface StoreProps {
  name: string;
  age: string;
  rating: number;
}

export const Form = () => {
  const navigate = useNavigate();
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const ratingRef = useRef<HTMLInputElement>(null);
  const [items, setItems] = useState<StoreProps[]>(() => {
    const storedItems = localStorage.getItem("data");
    return storedItems ? JSON.parse(storedItems) : [];
  });
  console.log(items);

  useEffect(() => {
    // Update local storage whenever items change
    localStorage.setItem("data", JSON.stringify(items));
  }, [items]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Create the new item
    const newItem: StoreProps = {
      name: nameRef.current?.value || "",
      age: ageRef.current?.value || "",
      rating: Number(ratingRef.current?.value) || 0,
    };

    // Update the state
    setItems((prevItems) => [...prevItems, newItem]);

    // Navigate after a brief delay to ensure state update
    setTimeout(() => {
      navigate("/thankyou");
    }, 100); // Short delay for state update
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "center",
        width: "70vw",
      }}
    >
      <input ref={nameRef} type="text" placeholder="Name" required />
      <input ref={ageRef} type="text" placeholder="Age" required />
      <input
        style={{ width: "70vw" }}
        ref={ratingRef}
        type="number"
        placeholder="Rate dining experience on a scale of 1-5"
        min="1"
        max="5"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};
