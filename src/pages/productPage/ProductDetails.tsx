import { useEffect, useState } from "react";
import { HEADING_TEXT_STYLES, TITLE_TEXT_STYLES } from "../../shared/styles/textVariables";
import type { Product } from "../../interfaces/domain/product";
import type { State } from "../../interfaces/app/state";
import PrimaryButton from "../../base/button/ButtonPrimary";
import HeartSVG from "../../shared/ui/icons/Heart";
import { productPageTranslations } from "../../utils/translations/productPage/productPage";
import { updateProduct } from "../../services/updateProduct";

type ProductProps = {
  product: Product;
  state: State;
  toggleWishlist?: (productId: number) => void;
  addToCart?: (productId: number, quantity?: number) => void;
  onProductUpdate?: (product: Product) => void;
};

type EditValues = {
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  stock: number;
  shippingInformation: string;
  returnPolicy: string;
  thumbnail: string;
  images: string[];
};

function ProductDetails({
  product,
  state,
  toggleWishlist,
  addToCart,
  onProductUpdate,
}: ProductProps) {
  const t = productPageTranslations[state.lang as keyof typeof productPageTranslations];
  const isAdmin = state.user?.isAdmin;
  const [showAddedMessage, setShowAddedMessage] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formValues, setFormValues] = useState<EditValues>({
    title: product.title,
    description: product.description,
    category: product.category,
    price: product.price,
    discountPercentage: product.discountPercentage,
    stock: product.stock,
    shippingInformation: product.shippingInformation,
    returnPolicy: product.returnPolicy,
    thumbnail: product.thumbnail,
    images: product.images ?? [],
  });
  const [newImageUrl, setNewImageUrl] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState<string>("");
  const inStock = formValues.stock > 1;
  const availabilityClass = inStock ? "text-button-1" : "text-secondary-2";
  const quantityId = `quantity-${product.id}`;

  useEffect(() => {
    setFormValues({
      title: product.title,
      description: product.description,
      category: product.category,
      price: product.price,
      discountPercentage: product.discountPercentage,
      stock: product.stock,
      shippingInformation: product.shippingInformation,
      returnPolicy: product.returnPolicy,
      thumbnail: product.thumbnail,
      images: product.images ?? [],
    });
  }, [product]);

  useEffect(() => {
    if (!showAddedMessage) return;

    const timeout = window.setTimeout(() => setShowAddedMessage(false), 2000);
    return () => window.clearTimeout(timeout);
  }, [showAddedMessage]);

  const handleInputChange = (
    field: keyof EditValues,
    value: string | number | string[],
  ) => {
    setFormValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleAddImage = () => {
    const url = newImageUrl.trim();
    if (!url) return;

    setFormValues((prev) => ({
      ...prev,
      images: [...prev.images, url],
      thumbnail: prev.thumbnail || url,
    }));
    setNewImageUrl("");
  };

  const handleRemoveImage = (index: number) => {
    setFormValues((prev) => ({
      ...prev,
      images: prev.images.filter((_, idx) => idx !== index),
    }));
  };

  const handleCancel = () => {
    setIsEditing(false);
    setSaveError("");
    setNewImageUrl("");
    setFormValues({
      title: product.title,
      description: product.description,
      category: product.category,
      price: product.price,
      discountPercentage: product.discountPercentage,
      stock: product.stock,
      shippingInformation: product.shippingInformation,
      returnPolicy: product.returnPolicy,
      thumbnail: product.thumbnail,
      images: product.images ?? [],
    });
  };

  const handleSave = async () => {
    setIsSaving(true);
    setSaveError("");

    const updatedData: Partial<Product> = {
      title: formValues.title,
      description: formValues.description,
      category: formValues.category,
      price: Number(formValues.price),
      discountPercentage: Number(formValues.discountPercentage),
      stock: Number(formValues.stock),
      shippingInformation: formValues.shippingInformation,
      returnPolicy: formValues.returnPolicy,
      thumbnail: formValues.thumbnail,
      images: formValues.images,
    };

    try {
      const savedProduct = await updateProduct(product.id, updatedData);
      onProductUpdate?.({ ...product, ...savedProduct });
      setIsEditing(false);
    } catch (error) {
      setSaveError(
        error instanceof Error
          ? error.message
          : "Unable to save changes. Please try again.",
      );
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-6 rounded-[28px] border border-black/10 bg-white p-8 shadow-sm w-162.5">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-4">
            <div className="flex flex-col gap-3">
              {isEditing ? (
                <input
                  value={formValues.title}
                  onChange={(event) => handleInputChange("title", event.target.value)}
                  className="w-full rounded-3xl border border-black/10 bg-secondary px-4 py-3 text-2xl font-semibold"
                />
              ) : (
                <h1 className={`${HEADING_TEXT_STYLES.xs} font-semibold`}>{product.title}</h1>
              )}

              <div className="flex flex-wrap items-center gap-3 text-sm text-black/60">
                <span>({product.reviews.length} Reviews)</span>
                <span className={availabilityClass}>{inStock ? `${t.inStock}` : `${t.outOfStock}`}</span>
                {isEditing ? (
                  <input
                    value={formValues.category}
                    onChange={(event) => handleInputChange("category", event.target.value)}
                    className="rounded-3xl border border-black/10 bg-secondary px-4 py-2 text-sm"
                  />
                ) : (
                  <span className="capitalize">{product.category}</span>
                )}
              </div>
            </div>
          </div>

          {isAdmin && (
            <button
              type="button"
              className="rounded-full border border-black/10 bg-secondary px-4 py-3 text-sm font-semibold"
              onClick={() => setIsEditing((prev) => !prev)}
            >
              {isEditing ? "Edit mode" : "✏️ Edit"}
            </button>
          )}
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className={`${HEADING_TEXT_STYLES.xs} font-semibold text-black`}>${formValues.price}</span>
            {isEditing && (
              <input
                type="number"
                value={formValues.price}
                onChange={(event) => handleInputChange("price", Number(event.target.value))}
                className="w-28 rounded-3xl border border-black/10 bg-secondary px-4 py-3 text-base"
              />
            )}
          </div>

          {isEditing ? (
            <textarea
              value={formValues.description}
              onChange={(event) => handleInputChange("description", event.target.value)}
              className="w-full rounded-3xl border border-black/10 bg-secondary px-4 py-4 text-black/70"
              rows={5}
            />
          ) : (
            <p className={`${TITLE_TEXT_STYLES.sm} max-w-xl text-black/70`}>{product.description}</p>
          )}
        </div>

        {isEditing && (
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-4">
              <label className="block text-sm font-semibold">Discount %</label>
              <input
                type="number"
                value={formValues.discountPercentage}
                onChange={(event) => handleInputChange("discountPercentage", Number(event.target.value))}
                className="w-full rounded-3xl border border-black/10 bg-secondary px-4 py-3 text-base"
              />
            </div>
            <div className="space-y-4">
              <label className="block text-sm font-semibold">Stock</label>
              <input
                type="number"
                value={formValues.stock}
                onChange={(event) => handleInputChange("stock", Number(event.target.value))}
                className="w-full rounded-3xl border border-black/10 bg-secondary px-4 py-3 text-base"
              />
            </div>
          </div>
        )}

        {!isEditing && (
          <div className="flex flex-wrap items-center gap-4">
            <label htmlFor={quantityId} className="sr-only">
              Quantity
            </label>
            <input
              id={quantityId}
              type="number"
              min={1}
              defaultValue={1}
              className="w-28 rounded-3xl border border-black/10 bg-secondary px-4 py-3 text-base"
            />
            <PrimaryButton
              className="h-12 px-8 flex items-center"
              onClick={(event) => {
                event.preventDefault();
                const input = document.getElementById(quantityId) as HTMLInputElement | null;
                const quantity = input ? Math.max(1, Number(input.value) || 1) : 1;
                addToCart?.(product.id, quantity);
                setShowAddedMessage(true);
              }}
            >
              {t.buyNow}
            </PrimaryButton>
            <button
              type="button"
              className="flex h-12 w-12 items-center justify-center rounded-3xl border border-black/10 bg-white"
              onClick={() => toggleWishlist?.(product.id)}
            >
              <HeartSVG
                stroke={state.wishlist.includes(product.id) ? "red" : "black"}
                color={state.wishlist.includes(product.id) ? "red" : "transparent"}
              />
            </button>
            {showAddedMessage && (
              <p className="text-sm text-button-1">{t.addedToCart}</p>
            )}
          </div>
        )}

        <div className="rounded-3xl border border-black/10 bg-secondary p-5 text-sm text-black/70">
          <p className="font-semibold text-black">Shipping</p>
          {isEditing ? (
            <textarea
              value={formValues.shippingInformation}
              onChange={(event) => handleInputChange("shippingInformation", event.target.value)}
              className="mt-2 w-full rounded-3xl border border-black/10 bg-white px-4 py-3 text-sm text-black/70"
              rows={3}
            />
          ) : (
            <p>{product.shippingInformation}</p>
          )}
          <p className="mt-4 font-semibold text-black">Returns</p>
          {isEditing ? (
            <textarea
              value={formValues.returnPolicy}
              onChange={(event) => handleInputChange("returnPolicy", event.target.value)}
              className="mt-2 w-full rounded-3xl border border-black/10 bg-white px-4 py-3 text-sm text-black/70"
              rows={3}
            />
          ) : (
            <p>{product.returnPolicy}</p>
          )}
        </div>

        {isEditing && (
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="block text-sm font-semibold">Thumbnail URL</label>
                <input
                  value={formValues.thumbnail}
                  onChange={(event) => handleInputChange("thumbnail", event.target.value)}
                  className="w-full rounded-3xl border border-black/10 bg-secondary px-4 py-3 text-base"
                  placeholder="Thumbnail link"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold">Add image URL</label>
                <div className="flex gap-2">
                  <input
                    value={newImageUrl}
                    onChange={(event) => setNewImageUrl(event.target.value)}
                    className="w-full rounded-3xl border border-black/10 bg-secondary px-4 py-3 text-base"
                    placeholder="https://..."
                  />
                  <button
                    type="button"
                    onClick={handleAddImage}
                    className="rounded-3xl bg-black px-5 py-3 text-white"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
            <div className="grid gap-2">
              <p className="text-sm font-semibold">Gallery images</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {formValues.images.map((image, index) => (
                  <div key={`${image}-${index}`} className="flex items-center gap-3 rounded-3xl border border-black/10 bg-secondary p-3">
                    <span className="truncate text-sm text-black/70">{image}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveImage(index)}
                      className="rounded-full bg-white px-3 py-2 text-sm"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {isEditing && (
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              disabled={isSaving}
              onClick={handleSave}
              className="rounded-3xl bg-black px-7 py-3 text-white disabled:opacity-50"
            >
              {isSaving ? "Saving..." : "Save"}
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="rounded-3xl border border-black/10 bg-white px-7 py-3"
            >
              Cancel
            </button>
            {saveError && <p className="text-sm text-red-600">{saveError}</p>}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetails;
