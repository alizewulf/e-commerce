import PrimaryButton from "../../../base/button/ButtonPrimary";
import type { Product } from "../../../interfaces/interface";
import ProductCard from "../../../ui/cards/ProductCard";
import Heading from "./Heading";

type Props = {
  products: Product[];
};

function BestSellingSection({ products }: Props) {
  const popularProducts = [...products]
    .sort((a, b) => b.reviews.length - a.reviews.length)
    .slice(4, 8);

  return (
    <section className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <Heading
          textContent="This Month"
          subTitle="Best Selling Products"
        />

        <PrimaryButton>
          View All
        </PrimaryButton>
      </div>

      <div className="flex justify-between">
        {popularProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}

export default BestSellingSection