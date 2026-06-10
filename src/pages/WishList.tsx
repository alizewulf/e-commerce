import { useProducts } from "../hooks/useProducts";
import { TITLE_TEXT_STYLES } from "../shared/styles/textVariables";
import ProductCard from "../shared/ui/cards/ProductCard";
import type { StateProps } from "../interfaces/app/state";
import Heading from "./home/Heading";
import { wishListTranslations } from "../utils/translations/wishList";

type WishListProps = StateProps & {
  toggleWishlist?: (productId: number) => void;
  addToCart?: (productId: number) => void;
  moveAllToCart?: () => void;
};

function WishList({ state, toggleWishlist, addToCart, moveAllToCart }: WishListProps) {
    const products = useProducts();
    const favoriteProducts = products.filter((product) => state.wishlist.includes(product.id));
    const t = wishListTranslations[state.lang as keyof typeof wishListTranslations];
    const buttonStyling = `${TITLE_TEXT_STYLES.md} py-4 px-12 rounded-sm border border-black/50 cursor-pointer`
    return (
        <section className="py-18.75 flex flex-col justify-between gap-20 mt-5 px-33.75">
            <div className="flex flex-col h-1/2">
            <div className="flex justify-between items-center">
                <p className={`${TITLE_TEXT_STYLES.xl}`}>WishList ({state.wishlist.length})</p>
                <button type="button" className={buttonStyling} onClick={moveAllToCart}>{t.actions.moveAllToBag}</button>
            </div>

            {favoriteProducts.length === 0 ? (
                <div className="mt-10 text-center text-black/70">
                    <p className={`${TITLE_TEXT_STYLES.md}`}>{t.content.noFavorites}</p>
                </div>
            ) : (
                <div className="mt-10 grid grid-cols-4 gap-6">
                    {favoriteProducts.map((product) => (
                        <div key={product.id} className="flex flex-col gap-4">
                          <ProductCard
                            product={product}
                            isFavorite={true}
                            onToggleFavorite={() => toggleWishlist?.(product.id)}
                          />
                          <button
                            type="button"
                            className={`${TITLE_TEXT_STYLES.sm} py-3 px-4 rounded-sm border border-black/50 cursor-pointer`}
                            onClick={() => addToCart?.(product.id)}
                          >
                            {t.actions.moveToBag}
                          </button>
                        </div>
                    ))}
                </div>
            )}
            </div>

            <div className="flex flex-col h-1/2">
            <div className="flex justify-between w-full">
                <Heading textContent={t.content.justForYou}/>
                <button className={buttonStyling}>{t.actions.seeAll}</button>
            </div>
            </div>
        </section>
    )
}

export default WishList