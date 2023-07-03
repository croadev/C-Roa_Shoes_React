import ItemDetail from "./itemDetail";
import product from "../Products.json";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [shoes, setShoes] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(product);
      }, 500);
    });
    getData.then((res) => setShoes(res.find((number) => number.id === id)));
  }, [id]);
  console.log(shoes);
  return <ItemDetail data={shoes} />;
};

export default ItemDetailContainer;
