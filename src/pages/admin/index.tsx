import { useEffect, useState, type FormEvent } from "react";
import InputModule from "../../base/input/Inputs";
import Time from "../../shared/ui/time/Time";
import { TITLE_TEXT_STYLES } from "../../shared/styles/textVariables";
import type { StateProps } from "../../interfaces/app/state";
import { manageAccountTranslations } from "../../utils/translations/manageAccount";
import { API_PRODUCTS_URL } from "../../services/API_CONFIG";

type ProductFormValues = {
  title: string;
  description: string;
  category: string;
  price: string;
  discountPercentage: string;
  stock: string;
  thumbnail: string;
  imagesText: string;
  shippingInformation: string;
  returnPolicy: string;
};

function AdminPanel({ state }: StateProps) {
  const t = manageAccountTranslations[state.lang as keyof typeof manageAccountTranslations];
  const isAdmin = state.user?.isAdmin;

  const [categories, setCategories] = useState<string[]>(() => {
    const storedCategories = localStorage.getItem("adminCategories");
    return storedCategories ? JSON.parse(storedCategories) : [];
  });
  const [newCategory, setNewCategory] = useState("");
  const [categoryMessage, setCategoryMessage] = useState<string | null>(null);

  const [productForm, setProductForm] = useState<ProductFormValues>({
    title: "",
    description: "",
    category: "",
    price: "",
    discountPercentage: "",
    stock: "",
    thumbnail: "",
    imagesText: "",
    shippingInformation: "",
    returnPolicy: "",
  });
  const [productMessage, setProductMessage] = useState<string | null>(null);
  const [productError, setProductError] = useState<string | null>(null);
  const [isSubmittingProduct, setIsSubmittingProduct] = useState(false);

  const [timerState, setTimerState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    localStorage.setItem("adminCategories", JSON.stringify(categories));
  }, [categories]);

  useEffect(() => {
    if (!timerActive) return undefined;

    const interval = window.setInterval(() => {
      setTimerState((prev) => {
        const totalSeconds =
          prev.days * 86400 + prev.hours * 3600 + prev.minutes * 60 + prev.seconds;

        if (totalSeconds <= 1) {
          setTimerActive(false);
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        const nextSeconds = totalSeconds - 1;
        return {
          days: Math.floor(nextSeconds / 86400),
          hours: Math.floor((nextSeconds % 86400) / 3600),
          minutes: Math.floor((nextSeconds % 3600) / 60),
          seconds: nextSeconds % 60,
        };
      });
    }, 1000);

    return () => window.clearInterval(interval);
  }, [timerActive]);

  const formatTwoDigits = (value: number) => String(value).padStart(2, "0");

  const handleAddCategory = () => {
    const trimmedCategory = newCategory.trim();
    if (!trimmedCategory) {
      setCategoryMessage(t.categoryRequired);
      return;
    }

    if (
      categories.some(
        (category) => category.toLowerCase() === trimmedCategory.toLowerCase(),
      )
    ) {
      setCategoryMessage(t.categoryExists);
      return;
    }

    setCategories((prev) => [trimmedCategory, ...prev]);
    setNewCategory("");
    setCategoryMessage(t.newCategoryAdded);
  };

  const handleProductFormChange = (field: keyof ProductFormValues, value: string) => {
    setProductForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleAddProduct = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setProductMessage(null);
    setProductError(null);

    const title = productForm.title.trim();
    const description = productForm.description.trim();
    const category = productForm.category.trim() || categories[0] || "uncategorized";
    const price = Number(productForm.price);
    const discountPercentage = Number(productForm.discountPercentage);
    const stock = Number(productForm.stock);
    const shippingInformation = productForm.shippingInformation.trim();
    const returnPolicy = productForm.returnPolicy.trim();
    const thumbnail = productForm.thumbnail.trim();
    const images = productForm.imagesText
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

    if (!title || !description || Number.isNaN(price) || Number.isNaN(stock)) {
      setProductError(t.validationRequired);
      return;
    }

    const newProduct = {
      title,
      description,
      category,
      price,
      discountPercentage: Number(discountPercentage) || 0,
      stock,
      shippingInformation,
      returnPolicy,
      thumbnail: thumbnail || images[0] || "",
      images,
      rating: 0,
      availabilityStatus: stock > 0 ? "In stock" : "Out of stock",
      brand: "Admin",
      reviews: [],
    };

    try {
      setIsSubmittingProduct(true);
      const response = await fetch(API_PRODUCTS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });

      if (!response.ok) {
        throw new Error("Unable to create product");
      }

      await response.json();
      setProductMessage(t.productAddedSuccess);
      setProductForm({
        title: "",
        description: "",
        category: "",
        price: "",
        discountPercentage: "",
        stock: "",
        thumbnail: "",
        imagesText: "",
        shippingInformation: "",
        returnPolicy: "",
      });
    } catch (error) {
      setProductError(
        error instanceof Error ? error.message : t.productAddedError,
      );
    } finally {
      setIsSubmittingProduct(false);
    }
  };

  const startDiscountTimer = () => {
    setTimerState({ days: 0, hours: 0, minutes: 5, seconds: 0 });
    setTimerActive(true);
  };

  const stopDiscountTimer = () => {
    setTimerActive(false);
  };

  if (!isAdmin) return null;

  return (
    <section className="py-20 gap-20 px-33.75 flex flex-col">
      <div className="flex justify-between">
        <span className={`${TITLE_TEXT_STYLES.sm} text-black/50`}>
          Home / <span className="text-black">Admin</span>
        </span>
        <p className={`capitalize ${TITLE_TEXT_STYLES.sm}`}>
          {t.adminPanelTitle}
        </p>
      </div>

      <div className="rounded-[28px] border border-black/10 bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className={`text-black ${TITLE_TEXT_STYLES.xl} font-semibold`}>
                {t.adminPanelTitle}
              </p>
              <p className="text-black/60">{t.discountTimerTitle}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={startDiscountTimer}
                disabled={timerActive}
                className="rounded-full border border-black/10 bg-secondary px-4 py-2 text-sm font-semibold"
              >
                {t.startDiscountTimer}
              </button>
              <button
                type="button"
                onClick={stopDiscountTimer}
                disabled={!timerActive}
                className="rounded-full border border-black/10 bg-secondary px-4 py-2 text-sm font-semibold"
              >
                {t.stopDiscountTimer}
              </button>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr,1.2fr]">
            <div className="space-y-6">
              <p className="font-semibold">{t.createCategoryTitle}</p>
              <div className="flex flex-wrap gap-3">
                <InputModule
                  variant="primary"
                  placeholder={t.productCategory}
                  value={newCategory}
                  onChange={setNewCategory}
                  className="w-full max-w-sm"
                />
                <button
                  type="button"
                  onClick={handleAddCategory}
                  className="rounded-full border border-black/10 bg-secondary px-4 py-2 text-sm font-semibold"
                >
                  {t.addCategory}
                </button>
              </div>
              {categoryMessage && (
                <p className="text-sm text-green-600">{categoryMessage}</p>
              )}
              {categories.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <span
                      key={category}
                      className="rounded-full bg-secondary px-3 py-1 text-sm"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <form onSubmit={handleAddProduct} className="grid gap-4 sm:grid-cols-2">
              <InputModule
                variant="primary"
                placeholder={t.productTitle}
                value={productForm.title}
                onChange={(value) => handleProductFormChange("title", value)}
                className="w-full"
              />
              <InputModule
                variant="primary"
                placeholder={t.productCategory}
                value={productForm.category}
                onChange={(value) => handleProductFormChange("category", value)}
                className="w-full"
              />
              <InputModule
                variant="secondary"
                as="textarea"
                placeholder={t.productDescription}
                value={productForm.description}
                onChange={(value) => handleProductFormChange("description", value)}
                className="w-full sm:col-span-2"
              />
              <InputModule
                variant="primary"
                type="number"
                placeholder={t.productPrice}
                value={productForm.price}
                onChange={(value) => handleProductFormChange("price", value)}
                className="w-full"
              />
              <InputModule
                variant="primary"
                type="number"
                placeholder={t.productDiscountPercentage}
                value={productForm.discountPercentage}
                onChange={(value) => handleProductFormChange("discountPercentage", value)}
                className="w-full"
              />
              <InputModule
                variant="primary"
                type="number"
                placeholder={t.productStock}
                value={productForm.stock}
                onChange={(value) => handleProductFormChange("stock", value)}
                className="w-full"
              />
              <InputModule
                variant="primary"
                placeholder={t.productThumbnail}
                value={productForm.thumbnail}
                onChange={(value) => handleProductFormChange("thumbnail", value)}
                className="w-full sm:col-span-2"
              />
              <InputModule
                variant="primary"
                placeholder={t.productImages}
                value={productForm.imagesText}
                onChange={(value) => handleProductFormChange("imagesText", value)}
                className="w-full sm:col-span-2"
              />
              <InputModule
                variant="secondary"
                as="textarea"
                placeholder={t.productShipping}
                value={productForm.shippingInformation}
                onChange={(value) => handleProductFormChange("shippingInformation", value)}
                className="w-full sm:col-span-2"
              />
              <InputModule
                variant="secondary"
                as="textarea"
                placeholder={t.productReturnPolicy}
                value={productForm.returnPolicy}
                onChange={(value) => handleProductFormChange("returnPolicy", value)}
                className="w-full sm:col-span-2"
              />
              <div className="sm:col-span-2 flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  disabled={isSubmittingProduct}
                  className="rounded-full border border-black/10 bg-secondary px-6 py-3 text-sm font-semibold"
                >
                  {isSubmittingProduct ? "..." : t.productFormTitle}
                </button>
                {productMessage && (
                  <span className="text-sm text-green-600">{productMessage}</span>
                )}
                {productError && (
                  <span className="text-sm text-red-600">{productError}</span>
                )}
              </div>
            </form>
          </div>

          <div className="grid gap-4 sm:grid-cols-4">
            <Time timeType="Days" currentTime={formatTwoDigits(timerState.days)} type="secondary" />
            <Time timeType="Hours" currentTime={formatTwoDigits(timerState.hours)} type="secondary" />
            <Time timeType="Minutes" currentTime={formatTwoDigits(timerState.minutes)} type="secondary" />
            <Time timeType="Seconds" currentTime={formatTwoDigits(timerState.seconds)} type="secondary" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminPanel;
