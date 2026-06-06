import SecondaryArrowSVG from "../../../ui/icons/SecondaryArrow";
import {
  HEADING_TEXT_STYLES,
  TITLE_TEXT_STYLES,
} from "../../../shared/styles/textVariables";
import { heroTranslations } from "../../../utils/translations/homepage/hero";
import { useEffect, useState } from "react";
import { getRandomIndex } from "../../../utils/getRandomIndex";
import type { HomePageProps } from "../../../interfaces/interface";

export function HeroBanner({ products, state }: HomePageProps) {
  if (!products) return null
  const t =
    heroTranslations[state.lang as keyof typeof heroTranslations];
  const [currentIndex, setCurrentIndex] = useState(() =>
    getRandomIndex(products.length),
  );

  useEffect(() => {
    if (products.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex(getRandomIndex(products.length));
    }, 3000);

    return () => clearInterval(interval);
  }, [products.length]);
  if (products.length === 0) {
    return null;
  }
  return (
    <div className="bg-black w-full text-white h-90 relative">
      <div className="flex flex-col w-fit gap-5 px-16 pt-15 h-fit">
        <div className="flex flex-row items-center gap-6">
          <p className={TITLE_TEXT_STYLES.md}>{products[currentIndex].title}</p>
        </div>

        <h2 className={`w-67.5 ${HEADING_TEXT_STYLES.xl}`}>{t.voucher}</h2>

        <button
          className={`${TITLE_TEXT_STYLES.md} w-40 cursor-pointer flex items-center gap-3 underline`}
        >
          {t.shopNow} <SecondaryArrowSVG />
        </button>
      </div>

      <img
        src={products[currentIndex].thumbnail}
        alt="Mobile Icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-0"
      />
    </div>
  );
}
