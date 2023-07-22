import React from "react";
import { useState, useContext } from "react";
const CartContext = React.createContext("");

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ Children }) => {
  const [cart, setCart] = useState([]);
  const clearCart = () => setCart([]);
  const isInCart = (id) => {
    cart.find((product) => product.id === id);
  };
  const removeFromCart = (id) =>
    setCart(cart.filter((product) => product.id !== id));
  const addToCart = () => {};

  return (
    <CartContext.Provider
      value={{
        clearCart,
        isInCart,
        removeFromCart,
        addToCart,
      }}
    >
      {Children}
    </CartContext.Provider>
  );
};

export default CartProvider;
