import PrimaryButton from "../../base/button/ButtonPrimary";
import type { HomePageProps } from "../../interfaces/domain/home";
import ProductCard from "../../shared/ui/cards/ProductCard";
import Clock from "../../shared/ui/time/Clock";
import { FlashSales } from "../../utils/translations/homepage/flashSales";
import Heading from "./Heading";


function FlashSalesSection({ products,state }: HomePageProps) {
    if (!products || !state) return
    const t = FlashSales[state.lang as keyof typeof FlashSales];
  return (
    <section className="flex flex-col gap-6">
      <Heading textContent={t.today} subTitle={t.FlashSale}>
        <Clock ClockType="primary" />
      </Heading>

      <div className="mt-2 flex justify-around">
        {products.slice(0, 4).map((product, index) => (
          <ProductCard key={product.id ?? index} product={product} />
        ))}
      </div>

      <div className="flex justify-center mt-15">
        <PrimaryButton className="w-fit">
          {t.viewAllProducts}
        </PrimaryButton>
      </div>
    </section>
  );
}

export default FlashSalesSection