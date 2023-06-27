"use client";
import { useState, useEffect } from "react";
import CartOffcanvas from "./CartOffcanvas";
import { getCheckoutUrl, retrieveCart } from "../utils/shopify";
import { useStateContext } from "../utils/StateContext";

export default function Cart() {
  const [cartId, setCartId] = useState(null);
  const [cartInfo, setCartInfo] = useState(null);
  const [checkoutUrl, setCheckoutUrl] = useState(null);
  const { isCartUpdated, setIsCartUpdated } = useStateContext();




  //Retrieve cart ID from session storage
  useEffect(() => {
    const storedCartId = sessionStorage.getItem("cartId");
    setCartId(storedCartId);
  }, [isCartUpdated]);

  //Retrieve cart data from shopify
  useEffect(() => {
    if (cartId) {
      async function getCartData(cartId) {
        const cartData = await retrieveCart(cartId);
        setCartInfo(cartData);
        setIsCartUpdated(true);
      }
      getCartData(cartId);
    }
  }, [cartId, setIsCartUpdated, isCartUpdated]);

  //Retrieve checkout URL from shopify
  useEffect(() => {
    if (cartId) {
      async function retrieveCheckoutUrl(cartId) {
        const checkoutUrl = await getCheckoutUrl(cartId);
        setCheckoutUrl(checkoutUrl);
      }
      retrieveCheckoutUrl(cartId);
    }
  }, [cartId]);


  return (
    <>
      <CartOffcanvas cartInfo={cartInfo} checkoutUrl={checkoutUrl} />
    </>
  );
}
