import { useState, useRef } from "react";
import { StoreProps } from "./Form";

export const Statistics = () => {
  const filterRef = useRef<HTMLSelectElement>(null);
  const [itemsFilter, setItemsFilter] = useState<StoreProps[]>(() => {
    const storedItems = localStorage.getItem("data");
    return storedItems ? JSON.parse(storedItems) : [];
  });

  const [items, setItems] = useState<StoreProps[]>(() => {
    const storedItems = localStorage.getItem("data");
    return storedItems ? JSON.parse(storedItems) : [];
  });

  const handleFilter = () => {
    const filterValue = Number(filterRef.current?.value) || 0;

    const filteredItems = items.filter((item) => item.rating === filterValue);

    setItemsFilter(filteredItems);

    //console.log("All items:", items);
    //console.log("Filtered items:", filteredItems);
  };

  return (
    <div>
      <select ref={filterRef} name="filter" id="filter" onChange={handleFilter}>
        <option value="0">filter by rating</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <br />
      <table border={1} style={{ border: "2vw", padding: "2vw" }}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Feedback</td>
          </tr>
        </thead>
        <tbody>
          {itemsFilter.map((elt: StoreProps, i: number) => (
            <tr key={i}>
              <td>{elt.name}</td>
              <td>{elt.age}</td>
              <td>{elt.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
