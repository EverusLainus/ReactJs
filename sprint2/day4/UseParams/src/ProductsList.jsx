import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";

export const ProductsList = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const searchRef = useRef(null);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const category = searchParams.get("filter") || "";
    axios
      .get(
        "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products",
        {
          params: {
            filter: category,
          },
        }
      )
      .then((res) => {
        setProducts(res.data.data);
        console.log(typeof res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchParams]);
  const handleFilter = (e) => {
    e.preventDefault();
    var filter = searchRef.current.value;
    setSearchParams({ filter });
    console.log("search: " + filter);
  };
  return (
    <div>
      <input type="search" ref={searchRef} onChange={handleFilter} />

      <ul className="grid">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <h6>{product.title}</h6>
            <p>${product.price}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};
