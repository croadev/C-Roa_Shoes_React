import { useCartContext } from "../context/CartContext";

const itemCart = ({ product }) => {
  const { removeProduct } = useCartContext();
  return (
    <>
      <div className="col-md-4" style={{ width: "auto", margin: "auto auto" }}>
        <div className="card my-5" style={{ width: "20rem" }}>
          <img
            className="card-img-top"
            src={product.img}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">Cantidad {product.quantity}</p>
            <p className="card-text">${product.price}</p>
            <p className="card-text">
              Sub Total ${product.quantity * product.price}
            </p>
            <button
              onClick={() => removeProduct(product.id)}
              class="btn btn-primary"
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default itemCart;
