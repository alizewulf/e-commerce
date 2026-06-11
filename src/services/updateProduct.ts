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

async function fetchRawProductRecords(): Promise<RawProductRecord[]> {
  const response = await fetch(API_PRODUCTS_URL);
  if (!response.ok) {
    throw new Error("Unable to load product records");
  }

  const data = await response.json();
  return Array.isArray(data) ? data : [data];
}

async function saveWrapperRecord(
  wrapper: RawProductRecord,
): Promise<RawProductRecord> {
  if (wrapper.id) {
    const response = await fetch(`${API_PRODUCTS_URL}/${wrapper.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(wrapper),
    });

    if (!response.ok) {
      const message = await response.text();
      throw new Error(message || "Unable to save wrapper record");
    }
    return response.json();
  }

  const response = await fetch(API_PRODUCTS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(wrapper),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || "Unable to create wrapper record");
  }
  return response.json();
}

export async function updateProduct(
  id: number,
  data: Partial<Product>,
): Promise<Product> {
  const records = await fetchRawProductRecords();
  const wrapperRecords = records.filter(isWrapperRecord);
  const wrapper = wrapperRecords.sort((a, b) =>
    Number(b.id ?? 0) - Number(a.id ?? 0),
  )[0] ?? records[0];

  if (!wrapper || !Array.isArray(wrapper.products)) {
    throw new Error("Wrapper product record not found");
  }

  const productIndex = wrapper.products.findIndex(
    (item: Product) => String(item.id) === String(id),
  );

  if (productIndex === -1) {
    throw new Error("Product not found in wrapper record");
  }

  const updatedProduct = {
    ...wrapper.products[productIndex],
    ...data,
  } as Product;
  wrapper.products[productIndex] = updatedProduct;

  const savedWrapper = await saveWrapperRecord(wrapper);
  const savedProducts = savedWrapper.products as Product[];

  return (
    savedProducts.find((product) => String(product.id) === String(id)) ||
    updatedProduct
  );
}
