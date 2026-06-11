import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/getProducts";
import type { Product } from "../../interfaces/domain/product";
import type { StateProps } from "../../interfaces/app/state";
import ProductBreadcrumb from "./ProductBreadcrumb";
import ProductGallery from "./ProductGallery";
import ProductDetails from "./ProductDetails";

export function ProductPage({state, toggleWishlist, addToCart}:StateProps & { toggleWishlist?: (productId: number) => void; addToCart?: (productId: number, quantity?: number) => void }) {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      if (!id) {
        setIsLoading(false);
        setProduct(null);
        return;
      }

      try {
        const response = await getProducts();
        const products: Product[] = Array.isArray(response)
          ? response
          : Array.isArray(response?.products)
          ? response.products
          : [];
        const foundProduct =
          products.find((item) => String(item.id) === id) ?? null;

        setProduct(foundProduct);
      } catch {
        setProduct(null);
      } finally {
        setIsLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  if (isLoading) return <div>Loading...</div>;
  if (!product) return <div>Not found</div>;

  return (
    <section className="py-20 px-33.75">
      <ProductBreadcrumb product={product} />
      <div className="mt-12 grid gap-10 xl:grid-cols-[1.5fr_1fr]">
        <ProductGallery product={product} />
        <ProductDetails
          state={state}
          product={product}
          toggleWishlist={toggleWishlist}
          addToCart={addToCart}
          onProductUpdate={setProduct}
        />
      </div>
    </section>
  );
}

export default ProductPage;
