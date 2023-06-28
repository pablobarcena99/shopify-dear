"use client";
import { useContext } from "react";
import { createContext, useState } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [isCartUpdated, setIsCartUpdated] = useState(true);
  const handleToggleCart = () => setShowCart(!showCart);
  const handleToggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <Context.Provider value={{ handleToggleMenu, isMenuOpen, showCart, setShowCart, handleToggleCart, isCartUpdated, setIsCartUpdated }}>
      {children}
    </Context.Provider>
  );
};
export const useStateContext = () => useContext(Context);
