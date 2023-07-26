import ItemCount from "./itemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const ItemDetail = ({ data }) => {
  const [cart, setCart] = useState(false);
  const { addToCart } = useCartContext();
  const onAdd = (quantity) => {
    setCart(true);
    addToCart(data, quantity);
  };

  return (
    <>
      <div className="row g-0 pt-4 mb-4">
        <div className="col-md-6">
          <img
            className="img-fluid w-75"
            src={data.img}
            alt="imagen producto"
          />
        </div>
        <div className="col-md-6 text-center text-black d-flex flex-column justify-content-center">
          <h3 className="fw-bold">{data.name}</h3>
          <p>{data.description}</p>
          <p className="fs-1 fw-bold">${data.price}</p>
          {cart ? (
            <Link
              to="/cart"
              className="btn btn-primary w-50 fw-bold text-uppercase mx-auto"
            >
              Finalizar Compra
            </Link>
          ) : (
            <ItemCount initial={1} stock={10} onAdd={onAdd} />
          )}
        </div>
      </div>
      ;
    </>
  );
};

export default ItemDetail;
