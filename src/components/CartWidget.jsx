import carrito from "../assets/carrito.png";
import { Link } from "react-router-dom";
const CardWidget = () => {
  return (
    <Link className="text-decoration-none text-dark" to="/cart">
      <img src={carrito} alt="" /> <span class="fs-4 mx-2">0</span>
    </Link>
  );
};

export default CardWidget;
