import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "./itemCart";
import { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const Cart = () => {
  const { cart, totalPrice, clearCart } = useCartContext();
  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: "",
    dni: "",
  });
  const sendOrder = () => {
    const order = {
      buyer: formValues,
      items: cart,
      total: totalPrice(),
    };
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then((response) => {
      if (response.id) {
        clearCart();
        alert("su orden: " + response.id + " ha sido completada");
      }
    });
  };
  const handleChange = (ev) => {
    setFormValues((prev) => ({
      ...prev,
      [ev.target.name]: ev.target.value,
    }));
  };

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
      <p className="fs-3 fw-bold pb-3">Total:${totalPrice()}</p>
      <form className="form-register">
        <p className="fw-bold fs-4">Datos De Cliente</p>
        <label className="fw-bold fs-5">Nombre y Apellido</label>
        <input
          onChange={handleChange}
          value={formValues.name}
          className="controls"
          type="text"
          placeholder="Nombre"
          name="name"
        />

        <label className="fw-bold fs-5">Numero de Teléfono</label>
        <input
          value={formValues.phone}
          onChange={handleChange}
          className="controls"
          type="text"
          placeholder="Numero"
          name="phone"
        />

        <label className="fw-bold fs-5">Correo Electronico</label>
        <input
          onChange={handleChange}
          value={formValues.email}
          className="controls"
          type="email"
          placeholder="E-Mail"
          name="email"
        />

        <label className="fw-bold fs-5">DNI</label>
        <input
          onChange={handleChange}
          value={formValues.dni}
          className="controls"
          type="text"
          placeholder="DNI"
          name="dni"
        />

        <button type="submit" class="btn btn-primary" onClick={sendOrder}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Cart;
