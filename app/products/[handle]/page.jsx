"use client";
import ProductCard from "@/app/components/ProductCard";
import { getAllProducts, getProduct } from "@/app/utils/shopify";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductSection from "@/app/components/ProductSection";
import ProductsGallery from "@/app/components/ProductsGallery";
import Link from "next/link";
import SectionTitle from "@/app/components/SectionTitle";

export default async function Product(context) {
  const productId = `gid://shopify/Product/${context.searchParams.id}`;
  const product = await getProduct(productId);
  const relatedProducts = await getAllProducts();

  return (
    <>
      <ProductSection product={product} />
      {/* <SectionTitle title='Related Products' /> */}
      <ProductsGallery products={relatedProducts} />
    </>
  );
}
