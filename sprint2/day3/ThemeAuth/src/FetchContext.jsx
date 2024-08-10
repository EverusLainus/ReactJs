import { createContext, useState } from "react";
const url = import.meta.env.VITE_API_KEY;

import axios from "axios";

export const FetchContext = createContext();

export const FetchContextProvider = ({ children }) => {
  var [data, setData] = useState([]);
  function fetchData() {
    axios
      .get(`${url}/Tasks.json`)
      .then((res) => {
        var ret = Object.entries(res.data);
        setData(ret);
        console.log(ret);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <FetchContext.Provider value={{ data, fetchData, setData }}>
      {children}
    </FetchContext.Provider>
  );
};
