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
  return (
    <CartContext.Provider value={{ items, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
