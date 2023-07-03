import ItemList from "./itemList";
import { useState, useEffect } from "react";
import Articulos from "../Products.json";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(Articulos);
      }, 3000);
    });
    if (id) {
      getData.then((res) =>
        setData(res.filter((articulo) => articulo.category === id))
      );
    } else {
      getData.then((res) => setData(res));
    }
  }, [id]);
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
