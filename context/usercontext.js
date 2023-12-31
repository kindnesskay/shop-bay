"use client";
import { Auth } from "@/config/firebase";
import { AddToCart, getCartItems } from "@/tools/cartActions";
import { onAuthStateChanged } from "firebase/auth";
import { usePathname } from "next/navigation";
import { createContext, useEffect, useState } from "react";
export const ShopContext = createContext();

export function ShopContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [itemsInCart, setItemsInCart] = useState(0);
  const [cartState, setCartState] = useState(false);
  const [menuState, setMenuState] = useState(false);
  const [newCartItem, setNewCartItem] = useState(null);
  const [cartArray, setCartArray] = useState([]);
  const pathname = usePathname();
  const db_name = "fruits_unique";
  useEffect(() => {
    if (!newCartItem) return;
    const handleAddToCart = () => {
      newCartItem.quantity = 1;
      AddToCart(db_name, newCartItem);
      setCartArray([...cartArray, newCartItem]);
    };

    handleAddToCart();
  }, [newCartItem]);

  useEffect(() => {
    setIsLoading(true);
    setCartState(false);
    setMenuState(false);
    window.scrollTo(0,0)
  }, [pathname]);

  useEffect(() => {
    onAuthStateChanged(Auth, (user) => {
      setUser(user);
    });
  }, [user]);

  useEffect(() => {
    setItemsInCart(cartArray.length);
  }, [cartArray]);
  return (
    <ShopContext.Provider
      value={{
        user,
        setUser,
        isLoading,
        setIsLoading,
        itemsInCart,
        setItemsInCart,
        cartState,
        setCartState,
        setNewCartItem,
        menuState,
        setMenuState,
        cartArray,
        setCartArray,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}
