import { getTopCategories } from "../../utils/products/getTopCategories";
import { HeroBanner } from "./HeroBanner";
import { useProducts } from "../../hooks/useProducts";
import BestSellingSection from "./SalesSection";
import FlashSalesSection from "./FlashsalesSection";
import CategoryList from "./CategoryList";
import CategoriesSection from "./CategoriesSection";
import JBLCard from "./JBLCard";
import OurProducts from "./OurProducts";
import FeaturedSection from "./FeaturedSection";
import type { StateProps } from "../../interfaces/app/state";

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

