import { HEADING_TEXT_STYLES, TITLE_TEXT_STYLES } from "../../../shared/styles/textVariables";
import type { Product, State } from "../../../interfaces/interface";
import PrimaryButton from "../../../base/button/ButtonPrimary";
import HeartSVG from "../../../ui/icons/Heart";
import { productPageTranslations } from "../../../utils/translations/productPage/productPage";
type ProductProps = {
  product: Product;
  state: State
};


function ProductDetails({ product, state }: ProductProps) {
  const t = productPageTranslations[state.lang as keyof typeof productPageTranslations];
  
  const inStock = product.stock > 1;
  const availabilityClass = inStock ? "text-button-1" : "text-secondary-2";
  const quantityId = `quantity-${product.id}`;

  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-6 rounded-[28px] border border-black/10 bg-white p-8 shadow-sm w-162.5">
        <div className="space-y-4">
          <div className="flex flex-col gap-3">
            <h1 className={`${HEADING_TEXT_STYLES.xs} font-semibold`}>{product.title}</h1>
            <div className="flex flex-wrap items-center gap-3 text-sm text-black/60">
              <span>({product.reviews.length} Reviews)</span>
              <span className={availabilityClass}>{inStock ? `${t.inStock}` : `${t.outOfStock}`}</span>
              <span className="capitalize">{product.category}</span>
            </div>
          </div>

          <p className={`${HEADING_TEXT_STYLES.xs} font-semibold text-black`}>${product.price}</p>
          <p className={`${TITLE_TEXT_STYLES.sm} max-w-xl text-black/70`}>
            {product.description}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
          <div className="flex flex-wrap items-center gap-4">
            <label htmlFor={quantityId} className="sr-only">
              Quantity
            </label>
            <input
              id={quantityId}
              type="number"
              min={1}
              defaultValue={1}
              className="w-28 rounded-3xl border border-black/10 bg-secondary px-4 py-3 text-base"
            />
            <PrimaryButton className="h-12 px-8 flex items-center">{t.buyNow}</PrimaryButton>
            <button
              type="button"
              className="flex h-12 w-12 items-center justify-center rounded-3xl border border-black/10 bg-white"
            >
              <HeartSVG color="transparent" />
            </button>
          </div>

          <div className="rounded-3xl border border-black/10 bg-secondary p-5 text-sm text-black/70">
            <p className="font-semibold text-black">Shipping</p>
            <p>{product.shippingInformation}</p>
            <p className="mt-4 font-semibold text-black">Returns</p>
            <p>{product.returnPolicy}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
