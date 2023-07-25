import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "./itemCart";

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <p className="fs-1">No hay Articulos en el Carrito</p>
        <Link to="/" className="btn btn-primary mb-5">
          Ir a Comprar!
        </Link>
      </>
    );
  }

  return (
    <div className="row" style={{ width: "auto", margin: "auto auto" }}>
      {cart.map((product) => {
        return <ItemCart key={product.id} product={product} />;
      })}
      <p className="fs-3 fw-bold">Total:${totalPrice()}</p>
    </div>
  );
};

export default Cart;
