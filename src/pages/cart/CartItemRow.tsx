import { TITLE_TEXT_STYLES } from "../../shared/styles/textVariables";
import type { CartProduct } from "./cartLogic";

type CartItemRowProps = {
  product: CartProduct;
  onQuantityChange: (id: number, value: number) => void;
  onRemove: (id: number) => void;
};

export const rowStyle = `grid grid-cols-[2fr_1fr_1fr_1fr] items-center gap-x-8 py-4 ${TITLE_TEXT_STYLES.md}`;

function CartItemRow({ product, onQuantityChange, onRemove }: CartItemRowProps) {
  return (
    <div className={rowStyle}>
      <span className="relative flex items-center gap-5">
        <div className="relative">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-14 h-14 rounded object-cover"
          />
          <button
            type="button"
            className="absolute cursor-pointer -right-2 -top-2 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-secondary-2 text-white text-[0.75rem] font-semibold"
            onClick={() => onRemove(product.id)}
            aria-label="Remove item"
          >
            ×
          </button>
        </div>
        <span>{product.title}</span>
      </span>
      <span>${product.price}</span>
      <span>
        <input
          type="number"
          min={1}
          value={product.quantity}
          onChange={(e) => onQuantityChange(product.id, Number(e.target.value))}
          className="w-20 rounded border border-black/10 px-3 py-2 text-center"
        />
      </span>
      <span>${(product.price * product.quantity).toFixed(2)}</span>
    </div>
  );
}

export default CartItemRow;
