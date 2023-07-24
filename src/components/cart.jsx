import { useCartContext } from "../context/CartContext";

const cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <p className="fs-1">No hay Articulos en el Carrito</p>
        <link to="/" className="btn btn-primary">
          Ir a Comprar!
        </link>
      </>
    );
  }

  return <div>Cart</div>;
};

export default cart;
