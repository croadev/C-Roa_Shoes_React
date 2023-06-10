import carrito from "../assets/carrito.png";

const CardWidget = () => {
  return (
    <div>
      <img src={carrito} alt="" /> <span class="fs-4 mx-2">0</span>
    </div>
  );
};

export default CardWidget;
