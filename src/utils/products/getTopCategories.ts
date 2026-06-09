import type { Product } from "../../interfaces/domain/product";
export function getTopCategories(products: Product[], limit = 8) {
  const grouped = products.reduce((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return Object.entries(grouped)
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit);
}