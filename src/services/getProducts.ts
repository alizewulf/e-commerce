import { API_PRODUCTS_URL } from "./API_CONFIG";
import type { Product } from "../interfaces/domain/product";

type RawProductRecord = Record<string, any>;

function isWrapperRecord(record: RawProductRecord): boolean {
  return (
    record &&
    Array.isArray(record.products) &&
    typeof record.title === "undefined" &&
    typeof record.description === "undefined"
  );
}

export async function getProducts() {
  try {
    const fetchData = await fetch(API_PRODUCTS_URL);
    const data = await fetchData.json();

    if (Array.isArray(data)) {
      const wrapperRecords = data.filter(isWrapperRecord);
      if (wrapperRecords.length > 0) {
        wrapperRecords.sort((a, b) =>
          Number(b.id ?? 0) - Number(a.id ?? 0),
        );
        return wrapperRecords[0].products as Product[];
      }

      const firstItem = data[0];
      if (firstItem && Array.isArray(firstItem.products)) {
        return firstItem.products;
      }

      return data as Product[];
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
