"use client";
import { useContext } from "react";
import { createContext, useState } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {

  const [showCart, setShowCart] = useState(false);
  const [isCartUpdated, setIsCartUpdated] = useState(true);
  const handleCloseCart = () => setShowCart(false);
  const handleShowCart = () => setShowCart(true);

  return <Context.Provider value={{ showCart, setShowCart , handleCloseCart, handleShowCart, isCartUpdated, setIsCartUpdated}}>{children}</Context.Provider>;
};
export const useStateContext = () => useContext(Context);
