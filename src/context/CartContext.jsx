import React from "react";
import { useState, useContext } from "react";
const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const clearCart = () => setCart([]);
  const isInCart = (id) => {
    cart.find((product) => product.id === id);
  };
  const removeFromCart = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  const addToCart = (item, quantity) => {
    let newCart;
    let product = cart.find((product) => product.id === item.id);
    if (product) {
      product.quantity += quantity;
      newCart = [...cart];
    } else {
      product = { ...item, quantity: quantity };
      newCart = [...cart, product];
    }
    setCart(newCart);
  };

  const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
  };

  const totalProducts = () => {
    return cart.reduce(
      (acumulador, productoActual) => acumulador + productoActual.quantity,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        clearCart,
        isInCart,
        removeFromCart,
        addToCart,
        totalPrice,
        totalProducts,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
