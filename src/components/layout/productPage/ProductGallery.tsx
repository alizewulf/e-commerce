import { useEffect, useState } from "react";
import type { Product } from "../../../interfaces/interface";

type ProductGalleryProps = {
  product: Product;
};

function ProductGallery({ product }: ProductGalleryProps) {
  const images = [product.thumbnail, ...product.images].filter(Boolean);
  const [selectedImage, setSelectedImage] = useState(images[0]);

  useEffect(() => {
    setSelectedImage(images[0]);
  }, [images]);

  return (
    <div className="flex flex-col gap-6">
      <div className="overflow-hidden rounded-[28px] bg-secondary p-6 shadow-sm">
        <img
          src={selectedImage}
          alt={product.title}
          className="h-[520px] w-full object-contain"
        />
      </div>

      <div className="grid grid-cols-4 gap-4">
        {images.slice(0, 4).map((image) => (
          <button
            key={image}
            type="button"
            onClick={() => setSelectedImage(image)}
            className="overflow-hidden rounded-3xl border border-black/10 bg-white p-3 transition hover:border-black/20"
          >
            <img
              src={image}
              alt={`${product.title} preview`}
              className="h-28 w-full object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductGallery;
