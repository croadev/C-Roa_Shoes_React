import ItemDetail from "./itemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [shoes, setShoes] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, "products", id);
    getDoc(queryDoc).then((res) => setShoes({ id: res.id, ...res.data() }));
  }, [id]);
  return <ItemDetail data={shoes} />;
};

export default ItemDetailContainer;
