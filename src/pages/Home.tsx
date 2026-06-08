import { getTopCategories } from "../utils/products/getTopCategories";
import { HeroBanner } from "./home/HeroBanner";
import { useProducts } from "../hooks/userProducts";
import BestSellingSection from "./home/SalesSection";
import FlashSalesSection from "./home/FlashsalesSection";
import CategoryList from "./home/CategoryList";
import CategoriesSection from "./home/CategoriesSection";
import JBLCard from "./home/JBLCard";
import OurProducts from "./home/OurProducts";
import FeaturedSection from "./home/FeaturedSection";
import type { StateProps } from "../interfaces/interface";

function HomePage({state}:StateProps) {
  const products = useProducts();

  if (!products.length) return null;

  const categories = getTopCategories(products);

  return (
    <div className="flex px-33.75 flex-col gap-35">
      <section className="py-10 flex flex-1 justify-between gap-35">
        <CategoryList categories={categories} />
        <HeroBanner state={state} products={products}/>
      </section>

      <FlashSalesSection state={state} products={products} />

      <CategoriesSection state={state} products={products} />

      <BestSellingSection state={state} products={products} />

      <JBLCard state={state}/>

      <OurProducts state={state} products={products}/>

      <FeaturedSection state={state}/>
    </div>
  );
}

export default HomePage;

