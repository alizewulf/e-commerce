import { useEffect, useState } from "react";
import { getProducts } from "../services/getProducts";
import type { Product } from "../interfaces/interface"

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getProducts();
      setProducts(data[0].products);
    })();
  }, []);

  return products;
}