import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import ProductsGallery from "./components/ProductsGallery";
import { getAllProducts } from "./utils/shopify";

export default async function Home() {
  const products = await getAllProducts();
  return (
    <div>
      <div>
        <Hero />
        <div className='container'>
          <ProductsGallery products={products} />
        </div>
      </div>
    </div>
  );
}
