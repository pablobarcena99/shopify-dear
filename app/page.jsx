import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import ProductsGallery from "./components/ProductsGallery";
import SectionTitle from "./components/SectionTitle";
import { getAllProducts } from "./utils/shopify";

export default async function Home() {
  const products = await getAllProducts();
  return (
    <div>
      <div>
        <Hero />
        <ProductsGallery products={products} />
      </div>
    </div>
  );
}
