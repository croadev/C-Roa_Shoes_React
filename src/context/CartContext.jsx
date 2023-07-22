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

  return (
    <CartContext.Provider
      value={{
        clearCart,
        isInCart,
        removeFromCart,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
