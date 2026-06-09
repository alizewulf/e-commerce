import { API_PRODUCTS_URL } from "./API_CONFIG";

export async function getProducts() {
  try {
    const fetchData = await fetch(API_PRODUCTS_URL);
    const data = await fetchData.json();

    if (Array.isArray(data)) {
      const firstItem = data[0];
      if (firstItem && Array.isArray(firstItem.products)) {
        return firstItem.products;
      }
      return data;
    }

    if (data && Array.isArray(data.products)) {
      return data.products;
    }

    return [];
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unknown error while loading data",
    );
  }
}
