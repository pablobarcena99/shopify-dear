"use client";
import React from "react";
import { useStateContext } from "../utils/StateContext";
import { Button, Offcanvas } from "react-bootstrap";
import Image from "next/image";
import styled from "styled-components";

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

export default function CartOffcanvas(props) {
  const { showCart, setShowCart, handleCloseCart, handleShowCart } = useStateContext();

  const cartInfo = props.cartInfo;
  const checkoutUrl = props.checkoutUrl;
  console.log("chekout", checkoutUrl);

  return (
    <Offcanvas show={showCart} onHide={handleCloseCart} placement='end' className='bg-dark'>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
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
                    <p>Price: {line.node.merchandise.product.priceRange.minVariantPrice.amount}€</p>
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
      </Offcanvas.Body>
    </Offcanvas>
  );
}
