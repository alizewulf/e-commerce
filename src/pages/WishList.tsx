import { useProducts } from "../hooks/useProducts";
import { TITLE_TEXT_STYLES } from "../shared/styles/textVariables";
import ProductCard from "../shared/ui/cards/ProductCard";
import type { StateProps } from "../interfaces/app/state";

function WishList({ state, toggleWishlist }: StateProps & { toggleWishlist?: (productId: number) => void }) {
    const products = useProducts();
    const favoriteProducts = products.filter((product) => state.wishlist.includes(product.id));

    return (
        <section className="py-18.75 flex flex-col mt-5 px-33.75">
            <div className="flex justify-between items-center">
                <p className={`${TITLE_TEXT_STYLES.xl}`}>WishList ({state.wishlist.length})</p>
                <button className={`${TITLE_TEXT_STYLES.md} py-4 px-12 rounded-sm border border-black/50 cursor-pointer`}>Move All To Bag</button>
            </div>

            {favoriteProducts.length === 0 ? (
                <div className="mt-10 text-center text-black/70">
                    <p className={`${TITLE_TEXT_STYLES.md}`}>No favorite products yet.</p>
                </div>
            ) : (
                <div className="mt-10 grid grid-cols-4 gap-6">
                    {favoriteProducts.map((product) => (
                        <ProductCard
                          key={product.id}
                          product={product}
                          isFavorite={true}
                          onToggleFavorite={() => toggleWishlist?.(product.id)}
                        />
                    ))}
                </div>
            )}
        </section>
    )
}

export default WishList