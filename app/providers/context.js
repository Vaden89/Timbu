import {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const addToCart = (product_id) => {
    setItems((prevState) => [...prevState, product_id]);
  };
  const removeFromCart = (product_id) => {
    setItems((prevState) => prevState.filter((item) => item !== product_id));
  };
  const clearCart = () => {
    setItems([]);
  };
  return (
    <CartContext.Provider
      value={{ items, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
