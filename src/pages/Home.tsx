import { getTopCategories } from "../utils/products/getTopCategories";
import { HeroBanner } from "../components/layout/home/HeroBanner";
import { useProducts } from "../hooks/userProducts";
import BestSellingSection from "../components/layout/home/SalesSection";
import FlashSalesSection from "../components/layout/home/FlashsalesSection";
import CategoryList from "../components/layout/home/CategoryList";
import CategoriesSection from "../components/layout/home/CategoriesSection";
import JBLCard from "../components/layout/home/JBLCard";
import OurProducts from "../components/layout/home/OurProducts";
import FeaturedSection from "../components/layout/home/FeaturedSection";
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

