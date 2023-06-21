"use client";
import ProductCard from "@/app/components/ProductCard";
import { getAllProducts, getProduct } from "@/app/utils/shopify";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductSection from "@/app/components/ProductSection";
import ProductsGallery from "@/app/components/ProductsGallery";
import Link from "next/link";

export default async function Product(context) {
  const productId = `gid://shopify/Product/${context.searchParams.id}`;
  const product = await getProduct(productId);
  const relatedProducts = await getAllProducts();


  return (
    <div className='container'>
      
      <ProductSection product={product} />
      <ProductsGallery products={relatedProducts} />
    </div>
  );
}
