'use client'
import React from 'react'
import styled from 'styled-components';
import ProductCard from './ProductCard';

const GalleryWrapper = styled.div`
margin-top: 32px;

`;
export default function ProductsGallery(props) {
  const products = props.products;
  return (
    <GalleryWrapper className='container-fluid'>
      <div className='row'>
        {products.map((product) => {
          return <ProductCard product={product} key={product.node.id} />;
        })}
      </div>
    </GalleryWrapper>
  );
}
