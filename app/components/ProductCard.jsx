"use client";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 200px;
  margin-bottom: 16px;
  /* border-radius: 16px; */
  overflow: hidden;
  color: inherit;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;
const ProductInfo = styled.div`
  min-height: 100px;
  display: flex;
  flex-direction: column;
  align-items: end;
  text-align: right;
  justify-content: start;
  padding: 8px;
  color: black;
  p {
    padding: 0px;
    margin: 0px;
  }
`;

export default function ProductCard(props) {
  const id = props.product.node.id;
  const simplyfyId = id.split("gid://shopify/Product/")[1];

  return (
    <div className='col col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-6'>
      <Link href={`products/${props.product.node.handle}/?id=${simplyfyId}`}>
        <Card>
          <img src={props.product.node.featuredImage.url} alt='' />
          <ProductInfo>
            <p className='product-title'>{props.product.node.title}</p>
            <p>{props.product.node.priceRange.minVariantPrice.amount}€</p>
            {/* <p>{props.product.node.description}</p> */}
          </ProductInfo>
        </Card>
      </Link>
    </div>
  );
}