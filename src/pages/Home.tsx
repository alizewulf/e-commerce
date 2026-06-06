import { getTopCategories } from "../utils/products/getTopCategories";
import { HeroBanner } from "./home/components/HeroBanner";
import { useProducts } from "../hooks/userProducts";
import BestSellingSection from "./home/components/SalesSection";
import FlashSalesSection from "./home/components/FlashsalesSection";
import CategoryList from "./home/components/CategoryList";
import CategoriesSection from "./home/components/CategoriesSection";
import JBLCard from "./home/components/JBLCard";
import OurProducts from "./home/components/OurProducts";
import FeaturedSection from "./home/components/FeaturedSection";
import type { StateProps } from "../interfaces/interface";

function HomePage({state}:StateProps) {
  const products = useProducts();

  if (!products.length) return null;

  const categories = getTopCategories(products);

  return (
    <div className="flex px-33.75 flex-col gap-35">
      <section className="py-10 flex flex-1 justify-between gap-35">
        <CategoryList categories={categories} />
        <HeroBanner />
      </section>

      <FlashSalesSection products={products} />

      <CategoriesSection products={products} />

      <BestSellingSection products={products} />

      <JBLCard/>

      <OurProducts products={products}/>

      <FeaturedSection state={state}/>
    </div>
  );
}


export default HomePage;
