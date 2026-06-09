import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../../services/getProducts";
import type { Product, StateProps } from "../../../interfaces/interface";
import ProductBreadcrumb from "./ProductBreadcrumb";
import ProductGallery from "./ProductGallery";
import ProductDetails from "./ProductDetails";

export function ProductPage({state}:StateProps) {
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
        const products =
          Array.isArray(response) &&
          response.length > 0 &&
          Array.isArray(response[0]?.products)
            ? (response[0].products as Product[])
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
        <ProductDetails state={state} product={product} />
      </div>
    </section>
  );
}

export default ProductPage;
