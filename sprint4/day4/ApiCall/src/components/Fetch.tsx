import { useEffect } from "react";
import { FetchType } from "../redux/actionType";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { fetchDaa } from "../redux/action";
import { Flex } from "@chakra-ui/react";

export const Fetch: React.FC = () => {
  const { isLoading, isError, data } = useSelector(
    (state: RootState) => state.fetch
  );
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDaa());
    console.log("after fetch");
    console.log(data);
  }, [dispatch]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const DataList: React.FC<{ data: FetchType[] }> = ({ data }) => {
    console.log("in DataList");
    console.log(data);
    return (
      <div>
        <h1>Products</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "2vw",
          }}
        >
          {isLoading ? (
            <h3>loading</h3>
          ) : isError ? (
            <h3>error</h3>
          ) : (
            data.map((elt) => (
              <div
                key={elt.id}
                style={{
                  display: "Flex",
                  flexDirection: "column",
                  border: "1px solid black",
                }}
              >
                <h2>
                  <b>{elt.title}</b>
                </h2>
                <p>{elt.description}</p>
              </div>
            ))
          )}
        </div>
      </div>
    );
  };
  return <DataList data={data} />;
};
