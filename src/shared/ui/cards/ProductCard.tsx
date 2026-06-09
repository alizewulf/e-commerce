import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TITLE_TEXT_STYLES } from "../../styles/textVariables";
import type { Product } from "../../../interfaces/interface";
import HeartSVG from "../icons/Heart";
import EyeSVG from "../icons/Eye";
type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  const [favorite, setFavorite] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col bg-secondary relative group">
      <img
        src={product.thumbnail}
        alt="Thumbnail"
        className="mx-auto"
      />
      <p className={`${TITLE_TEXT_STYLES.md} w-full mt-4`}>{product.title}</p>

      <div className="absolute top-1/5 right-0 flex-col gap-2 hidden group-hover:flex">
        <button
          type="button"
          className="p-2.5 rounded-full"
          onClick={() => setFavorite((prev) => !prev)}
        >
          <HeartSVG stroke={favorite ? "red" : " black"} color={favorite ? "red" : "transparent"}/>
        </button>
        <button
          type="button"
          className="p-2.5 rounded-full"
          onClick={() => navigate(`/product/${product.id}`)}
        >
          <EyeSVG />
        </button>
      </div>

      <div className={`flex gap-3 ${TITLE_TEXT_STYLES.md} w-full mt-4`}>
        <span className="text-secondary-2">${product.price}</span>
        <span className="line-through text-black/50">
          ${product.discountPercentage}
        </span>
      </div>

      <span className="flex gap-2 items-center w-full mt-2">
        Review: {product.rating}
        <span className={`text-black/50 font-semibold ${TITLE_TEXT_STYLES.sm}`}>
          ({product.reviews?.length ?? 0})
        </span>
      </span>
    </div>
  );
}

export default ProductCard;
