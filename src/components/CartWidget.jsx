import carrito from "../assets/carrito.png";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const CardWidget = () => {
  const { totalProducts } = useCartContext();
  return (
    <Link className="text-decoration-none text-dark" to="/cart">
      <img src={carrito} alt="" />{" "}
      <span class="fs-4 mx-2">{totalProducts() || ""}</span>
    </Link>
  );
};

export default CardWidget;
