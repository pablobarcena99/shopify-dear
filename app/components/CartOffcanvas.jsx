"use client";
import React from "react";
import { useStateContext } from "../utils/StateContext";
import { Button, Offcanvas } from "react-bootstrap";
import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";

const Title = styled.h1`
  /* Add your title styles here */
`;

const ListGroup = styled.ul`
  /* Add your list group styles here */
  margin: 0;
  padding: 0;
`;

const ListGroupItem = styled.li`
  display: flex;
  justify-content: start;
  gap: 8px;
  margin-bottom: 8px;
  * {
    margin: 0;
  }
  img {
    width: 75px;
    height: 90px;
    object-fit: cover;
  }
`;

const CartMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 500px;
  height: 100vh;
  background-color: white;
  color: #141414;
  padding: 4rem 32px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export default function CartOffcanvas(props) {
  const { showCart, handleToggleCart } = useStateContext();

  const cartInfo = props.cartInfo;
  const checkoutUrl = props.checkoutUrl;

  return (
    <>
      {showCart && (
        <CartMenu>
          <h3>Cart</h3>
          {cartInfo && (
            <div>
              <ListGroup>
                {cartInfo.lines.edges.map((line) => (
                  <ListGroupItem key={line.node.id}>
                    <img
                      src={line.node.merchandise.product.featuredImage.url}
                      alt={line.node.merchandise.product.title}
                    />
                    <div>
                      <h4>{line.node.merchandise.product.title}</h4>
                      <p>
                        Price: {line.node.merchandise.product.priceRange.minVariantPrice.amount}€
                      </p>
                      <p>Quantity: {line.node.quantity}</p>
                    </div>
                  </ListGroupItem>
                ))}
              </ListGroup>
              <p>Total Cost: {cartInfo.estimatedCost.totalAmount.amount}€</p>
              {checkoutUrl && (
                <Button variant='success' href={checkoutUrl.cart.checkoutUrl}>
                  Checkout
                </Button>
              )}
            </div>
          )}
        </CartMenu>
      )}
    </>
  );
}
