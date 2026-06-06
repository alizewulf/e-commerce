import PrimaryButton from "../../../base/button/ButtonPrimary";
import type { Product } from "../../../interfaces/interface";
import ProductCard from "../../../ui/cards/ProductCard";
import Clock from "../../../ui/time/Clock";
import Heading from "./Heading";

type Props = {
  products: Product[];
};

function FlashSalesSection({ products }: Props) {
  return (
    <section className="flex flex-col gap-6">
      <Heading textContent="Today's" subTitle="Flash Sales">
        <Clock ClockType="primary" />
      </Heading>

      <div className="mt-2 flex justify-around">
        {products.slice(0, 4).map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-center mt-15">
        <PrimaryButton className="w-fit">
          View All Products
        </PrimaryButton>
      </div>
    </section>
  );
}

export default FlashSalesSection