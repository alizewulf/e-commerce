import { categoryIcons } from "../../constants/categoryIcons";
import type { HomePageProps } from "../../interfaces/domain/home";
import Card from "../../shared/ui/cards/Card";
import { categoriesTranslate } from "../../utils/translations/homepage/categories";
import Heading from "./Heading";

function CategoriesSection({ products, state }: HomePageProps) {
  if (!state || !products) return null
  const t = categoriesTranslate[state.lang as keyof typeof categoriesTranslate];
  return (
    <section className="flex flex-col gap-6">
      <Heading subTitle={t.browseByCategory} textContent={t.categories} />

      <div className="mt-9 flex justify-between capitalize">
        {[...new Set(products.map((p) => p.category))].map((category) => (
          <Card
            key={category}
            variant="primary"
            svgContainer={false}
            showOutline={false}
            titleText={category}
            headingText={categoryIcons[category as keyof typeof categoryIcons]}
          />
        ))}
      </div>
    </section>
  );
}

export default CategoriesSection;
