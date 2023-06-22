//import { Articulos } from "../Products";
import ItemList from "./itemList";
import { useState, useEffect } from "react";
import Articulos from "../Products.json";

const ItemListContainer = ({ greeting }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(Articulos);
      }, 3000);
    });
    getData.then((res) => setData(res));
  }, []);
  return (
    <>
      <div>
        <h1 className="my-3 mb-4 text-center fw-bold fs-4">{greeting}</h1>
        <ItemList data={data} />
      </div>
    </>
  );
};

export default ItemListContainer;
