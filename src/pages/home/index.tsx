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

function HomePage({state, toggleWishlist}:StateProps & { toggleWishlist?: (productId:number) => void }) {
  const products = useProducts();

  if (!products.length) {
    return (
      <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-6">
        <p>Loading products...</p>
      </div>
    );
  }

  const categories = getTopCategories(products);

  return (
    <div className="flex px-33.75 flex-col gap-35">
      <section className="py-10 flex flex-1 justify-between gap-35">
        <CategoryList categories={categories} />
        <HeroBanner state={state} products={products}/>
      </section>

      <FlashSalesSection state={state} products={products} toggleWishlist={toggleWishlist} />

      <CategoriesSection state={state} products={products} />

      <BestSellingSection state={state} products={products} toggleWishlist={toggleWishlist} />

      <JBLCard state={state}/>

      <OurProducts state={state} products={products} toggleWishlist={toggleWishlist} />

      <FeaturedSection state={state}/>
    </div>
  );
}

export default HomePage;

