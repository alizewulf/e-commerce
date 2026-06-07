import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../../services/getProducts";
import type { Product } from "../../../interfaces/interface";

export function ProductPage() {
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
    <div>
      <img src={product.thumbnail} alt={product.title} />
      <h1>{product.title}</h1>
      <p>{product.price}</p>
    </div>
  );
}

export default ProductPage;
