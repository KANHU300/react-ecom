import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [selectRefresh, setSelectRefresh] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const whenLoginRefreshProduct = (item) => {
    setSelectRefresh([...selectRefresh, item]);
    // alert("whenLoginRefreshProduct is ready")
  };

  const removeFromCart = (item) => {
    setCartItems(cartItems.filter((apple) => apple !== item));
  };

  return (
    <CartContext.Provider value={{ cartItems,selectRefresh, setSelectRefresh,whenLoginRefreshProduct,addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
