import { useCartContext } from "../context/CartContext";

const ItemCart = ({ product }) => {
  const { removeFromCart } = useCartContext();
  return (
    <>
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-6">
            <img
              className="card-img-top"
              src={product.img}
              alt="Card image cap"
              style={{ width: 250 }}
            />
          </div>
          <div class="col-md-6">
            <div class="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">Cantidad {product.quantity}</p>
              <p className="card-text">${product.price}</p>
              <p className="card-text">
                Sub Total ${product.quantity * product.price}
              </p>
              <button
                onClick={() => removeFromCart(product.id)}
                class="btn btn-primary"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default ItemCart;
