"use client";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  overflow: hidden;
  color: inherit;
`;
const ProductInfo = styled.div`
  min-height: 100px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  padding: 8px;
  color: black;
`;
const ProductTitle = styled.p`
  font-size: 15px;
  margin: 0;
`;
const ProductPrice = styled.p`
  font-size: 12px;
  margin: 0;
`;
export default function ProductCard(props) {
  const id = props.product.node.id;
  const simplyfyId = id.split("gid://shopify/Product/")[1];

  return (
    <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12'>
      <Link href={`products/${props.product.node.handle}/?id=${simplyfyId}`}>
        <Card>
          <img src={props.product.node.featuredImage.url} alt={props.product.node.handle} />
          <ProductInfo>
            <ProductTitle>{props.product.node.title}</ProductTitle>
            <ProductPrice>{props.product.node.priceRange.minVariantPrice.amount}€</ProductPrice>
            {/* <p>{props.product.node.description}</p> */}
          </ProductInfo>
        </Card>
      </Link>
    </div>
  );
}
