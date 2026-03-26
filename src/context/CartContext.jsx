import { createContext, useState, useContext, useEffect, use } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);
  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };
  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((product) => product.id !== productId));
  };
  const isCartEmpty = (productId) => {
    return cartItems.some((product) => product.id === productId);
  };
  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    isCartEmpty,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
