import ItemList from "./itemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const querydb = getFirestore();
    const queryCol = collection(querydb, "products");
    if (id) {
      const queryFilter = query(queryCol, where("category", "==", id));
      getDocs(queryFilter).then((res) =>
        setData(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    } else {
      getDocs(queryCol).then((res) =>
        setData(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
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
