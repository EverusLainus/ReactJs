import { useState } from "react";

export const useInput = () => {
  const [data, setData] = useState("");
  const updateData = (e) => {
    e.preventDefault();
    setData(e.target.value);
    console.log(data);
  };

  return [data, updateData];
};
