import { useEffect, useState } from "react";
import { getProducts } from "../services/getProducts";
import type { Product } from "../interfaces/domain/product"

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(Array.isArray(data) ? data : []);
    };

    fetchProducts();
  }, []);

  return products;
}