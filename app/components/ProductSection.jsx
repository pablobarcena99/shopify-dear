"use client";
import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import { addToCart, updateCart } from "../utils/shopify";
import { useStateContext } from "../utils/StateContext";

const ProductWrapper = styled.div`
  margin-top: 32px;
  h1 {
    color: black;
  }
  display: flex;
  justify-content: center;
`;

const ProductImage = styled.img`
  width: 100%;
  border: 3px solid black;
`;
const QtyControls = styled.div`
  display: flex;
`;

export default function ProductSection(product) {
  const [checkout, setCheckout] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const {
    showCart,
    setShowCart,
    handleCloseCart,
    handleShowCart,
    isCartUpdated,
    setIsCartUpdated,
  } = useStateContext();

  const handleAddToCart = async () => {
    setCheckout(true);
    let cartId = sessionStorage.getItem("cartId");
    if (quantity > 0) {
      if (cartId) {
        await updateCart(cartId, product.product.variants.edges[0].node.id, quantity);
        setIsCartUpdated(false);
      } else {
        let data = await addToCart(product.product.variants.edges[0].node.id, quantity);
        cartId = data.cartCreate.cart.id;
        sessionStorage.setItem("cartId", cartId);
        setIsCartUpdated(false);
      }
    }
  };
  return (
    <>
      <ProductWrapper>
        <div className='row'>
          <div className=' col-xl-6 col-md-6 col-sm-12 d-flex align-items-center'>
            <div>
              <h1>{product.product.title}</h1>
              <p>{product.product.description}</p>
              <p>{product.product.priceRange.minVariantPrice.amount}€</p>
              <button variant='dark' className='btn btn-dark' onClick={handleAddToCart}>
                Add to cart
              </button>
            </div>
          </div>
          <div className='col-xl-6 col-md-6 col-sm-12'>
            <ProductImage src={product.product.images.nodes[0].url} alt='' />
          </div>
        </div>
      </ProductWrapper>
    </>
  );
}
