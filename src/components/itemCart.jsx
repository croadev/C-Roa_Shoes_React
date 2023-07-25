import { useCartContext } from "../context/CartContext";
import "../App.css";
const ItemCart = ({ product }) => {
  const { removeFromCart } = useCartContext();
  return (
    <div className="product-container my-5 rounded rounded-sm">
      <div className="d-flex space-between w-100 description-container">
        <div className="col-2">
          <h5>Producto</h5>
        </div>

        <div className="d-flex container-fluid justify-content-around names-container col-6">
          <h5>Precio</h5>
          <h5>Cantidad</h5>
          <h5>Subtotal</h5>
        </div>
      </div>

      <div className="product-container ">
        <hr />
        <div className="d-flex space-between  product-container-description">
          <div class="col-5">
            <div className="d-flex align-items-center shoes-text">
              <img
                className="card-img-top"
                src={product.img}
                alt="Card image cap"
                style={{ width: 200 }}
              />
              <h5 className="">{product.name}</h5>
            </div>
          </div>

          <div class="d-flex justify-content-around align-items-center col-7 product-description">
            <h5 class="responsive-text">${product.price}</h5>
            <h5 class="responsive-text-cantidad">${product.quantity}</h5>
            <h5 class="responsive-text-subtotal">
              ${product.quantity * product.price}
            </h5>

            {
              <button
                onClick={() => removeFromCart(product.id)}
                class="btn btn-primary"
              >
                Eliminar
              </button>
            }
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default ItemCart;
