import { useMemo } from "react";
import { useProducts } from "../../hooks/useProducts";
import { TITLE_TEXT_STYLES } from "../../shared/styles/textVariables";
import type { StateProps } from "../../interfaces/app/state";
import { getCartProducts, getCartTotal, normalizeQuantity } from "./cartLogic";
import CartItemRow, { rowStyle } from "./CartItemRow";
import { cartPageTranslations } from "../../utils/translations/cartPage";

function CartPage({ state, setState }: StateProps) {
  const t = cartPageTranslations[state.lang as keyof typeof cartPageTranslations];
  const products = useProducts();
  const cartItems = state.cart;

  const cartProducts = useMemo(
    () => getCartProducts(cartItems, products),
    [cartItems, products],
  );

  const totalPrice = useMemo(
    () => getCartTotal(cartProducts),
    [cartProducts],
  );

  const updateQuantity = (id: number, value: number) => {
    if (!setState) return;

    setState((prev) => ({
      ...prev,
      cart: prev.cart.map((item) =>
        item.id === id ? { ...item, quantity: normalizeQuantity(value) } : item,
      ),
    }));
  };

  const removeFromCart = (id: number) => {
    if (!setState) return;

    setState((prev) => ({
      ...prev,
      cart: prev.cart.filter((item) => item.id !== id),
    }));
  };

  return (
    <section className="flex px-33.75 mt-20 gap-20 flex-col">
      <span className={`text-black/50 ${TITLE_TEXT_STYLES.sm}`}>
        Home / <span className="text-black">Cart</span>
      </span>
      <div className="mx-auto flex flex-col gap-10 w-full max-w-[1200px]">
        <div className={rowStyle}>
          <span>{t.labels.product}</span>
          <span>{t.labels.price}</span>
          <span>{t.labels.quantity}</span>
          <span>{t.labels.subtotal}</span>
        </div>

        {cartProducts.length === 0 ? (
          <div className="py-20 text-center text-black/70">
            <p className={`${TITLE_TEXT_STYLES.md}`}>{t.content.emptyCart}</p>
          </div>
        ) : (
          cartProducts.map((product) => (
            <CartItemRow
              key={product.id}
              product={product}
              onQuantityChange={updateQuantity}
              onRemove={removeFromCart}
            />
          ))
        )}

        {cartProducts.length > 0 && (
          <div className="flex justify-end py-4">
            <p className={`${TITLE_TEXT_STYLES.xl} font-semibold`}>
              {t.content.totalLabel} ${totalPrice.toFixed(2)}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default CartPage;
