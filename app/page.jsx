import Marquee from "react-fast-marquee";
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
        {/* <Marquee autoFill={true} style={{ position: 'fixed', backgroundColor: "#abff4f"}}>
          <p style={{margin: 0, marginLeft: '20px', zIndex: 1}}>Summer Sales up to 80%</p>
        </Marquee> */}
        <Hero />
        <ProductsGallery products={products} />
      </div>
    </div>
  );
}
