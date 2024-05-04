"use client";
import { useEffect, useState } from "react";
import context from "./store";

const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {};

  const removeFromCart = (id) => {};

  return <context.Provider value={{ addToCart }}>{children}</context.Provider>;
};

export default ContextProvider;
