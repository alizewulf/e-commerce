import { Link, useParams } from "react-router-dom";
import Heading from "./home/Heading";
import ProductCard from "../shared/ui/cards/ProductCard";
import { useProducts } from "../hooks/useProducts";
import type { StateProps } from "../interfaces/app/state";

type CategoryPageProps = StateProps & {
  toggleWishlist?: (productId: number) => void;
};

function CategoryPage({ state, toggleWishlist }: CategoryPageProps) {
  const { category } = useParams<{ category: string }>();
  const products = useProducts();

  const normalizedCategory = category ? decodeURIComponent(category).toLowerCase() : "";
  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === normalizedCategory,
  );

  const title = normalizedCategory ? normalizedCategory.replace(/-/g, " ") : "Category";

  if (!products.length) {
    return (
      <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-6">
        <p>Loading products...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col px-33.75 py-10 gap-8">
      <div className="flex flex-col gap-4">
        <Heading textContent="Category filter" subTitle={title} />
        <p className="text-black/70 max-w-2xl">
          Найдено товаров в категории: <span className="font-semibold capitalize">{title}</span>
        </p>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="flex flex-col gap-6 items-start">
          <p className="text-lg font-semibold">Товаров в этой категории не найдено.</p>
          <Link to="/" className="text-primary underline">
            Вернуться на главную
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-7.5">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isFavorite={state.wishlist.includes(product.id)}
              onToggleFavorite={() => toggleWishlist?.(product.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryPage;
