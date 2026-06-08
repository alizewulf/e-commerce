import PrimaryButton from "../../../base/button/ButtonPrimary";
import type { HomePageProps } from "../../../interfaces/interface";
import ProductCard from "../../../ui/cards/ProductCard";
import { bestSellersTranslation } from "../../../utils/translations/homepage/bestSellers";
import Heading from "./Heading";

function BestSellingSection({ products, state }: HomePageProps) {
  if (!products) return null
  const popularProducts = [...products]
    .sort((a, b) => b.reviews.length - a.reviews.length)
    .slice(4, 8);
  const t =
    bestSellersTranslation[state.lang as keyof typeof bestSellersTranslation];

  return (
    <section className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <Heading textContent={t.thisMonth} subTitle={t.bestSelling} />

        <PrimaryButton>{t.ViewAll}</PrimaryButton>
      </div>

      <div className="flex justify-between">
        {popularProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default BestSellingSection;
