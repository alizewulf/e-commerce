import { API_PRODUCTS_URL } from "./API_CONFIG";

export async function getProducts() {
  try {
    const fetchData = await fetch(API_PRODUCTS_URL);
    const data = await fetchData.json();
    return data;
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unknown error while loading data",
    );
  }
}
