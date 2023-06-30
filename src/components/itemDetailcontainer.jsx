import ItemDetail from "./itemDetail";
import product from "../Products.json";
import { useState, useEffect } from "react";

const ItemDetailContainer = () => {
  const [shoes, setShoes] = useState({});

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(product);
      }, 500);
    });
    getData.then((res) => setShoes(res));
  }, []);
  console.log(shoes);
  return <ItemDetail data={shoes} />;
};

export default ItemDetailContainer;
