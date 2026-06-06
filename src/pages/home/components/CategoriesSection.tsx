import { categoryIcons } from "../../../constants/categoryIcons";
import type { Product } from "../../../interfaces/interface";
import Card from "../../../ui/cards/Card";
import Heading from "./Heading";

type Props = {
  products: Product[];
};

function CategoriesSection({ products }: Props) {
  return (
    <section className="flex flex-col gap-6">
      <Heading
        subTitle="Browse By Category"
        textContent="Categories"
      />

      <div className="mt-9 flex justify-between capitalize">
        {[...new Set(products.map(p => p.category))].map(category => (
          <Card
            key={category}
            variant="primary"
            svgContainer={false}
            showOutline={false}
            titleText={category}
            headingText={
              categoryIcons[
                category as keyof typeof categoryIcons
              ]
            }
          />
        ))}
      </div>
    </section>
  );
}

export default CategoriesSection