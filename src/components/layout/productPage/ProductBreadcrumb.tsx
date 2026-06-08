import type { Product } from "../../../interfaces/interface";
import { TITLE_TEXT_STYLES } from "../../../shared/styles/textVariables";

type ProductBreadcrumbProps = {
  product: Product;
};

function ProductBreadcrumb({ product }: ProductBreadcrumbProps) {
  return (
    <div className="text-sm text-black/50">
      <span className={TITLE_TEXT_STYLES.sm}>Home</span>
      <span className="mx-2">/</span>
      <span className={TITLE_TEXT_STYLES.sm}>{product.category}</span>
      <span className="mx-2">/</span>
      <span className={`${TITLE_TEXT_STYLES.sm} text-black`}>{product.title}</span>
    </div>
  );
}

export default ProductBreadcrumb;
