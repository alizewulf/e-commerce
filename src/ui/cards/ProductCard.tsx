import { TITLE_TEXT_STYLES } from "../../shared/styles/textVariables";
import type { Product } from "../../interfaces/interface";
type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="flex flex-col">
      <img src={product.thumbnail} alt="Thumbnail" />
      <p className={TITLE_TEXT_STYLES.md}>{product.title}</p>

      <div className={`flex gap-3 ${TITLE_TEXT_STYLES.md}`}>
        <span className="text-secondary-2">${product.price}</span>
        <span className="line-through text-black/50">
          ${product.discountPercentage}
        </span>
      </div>

      <span className="flex gap-2 items-center">
        Review: {product.rating}
        <span className={`text-black/50 font-semibold ${TITLE_TEXT_STYLES.sm}`}>
          ({product.reviews.length})
        </span>
      </span>
    </div>
  );
}

export default ProductCard;
