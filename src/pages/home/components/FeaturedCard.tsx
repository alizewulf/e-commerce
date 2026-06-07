import type { CardData } from "../../../interfaces/interface";
import { HEADING_TEXT_STYLES, TITLE_TEXT_STYLES } from "../../../shared/styles/textVariables";



function FeaturedCard({ title, description, image, alt, buttonLabel }: CardData) {
  return (
    <div className="bg-[#0D0D0D] w-1/2 h-full flex relative z-2">
      <img
        src={image}
        alt={alt}
        className="absolute right-1/2 translate-1/2 bottom-1/2 z-0"
      />
      <div className="flex flex-col justify-end items-start text-white p-6 gap-4">
        <h3 className={`${HEADING_TEXT_STYLES.xs} z-2 font-semibold`}>
          {title}
        </h3>
        <p className={`${TITLE_TEXT_STYLES.sm} z-2`}>{description}</p>
        <button className={`cursor-pointer underline z-2 ${TITLE_TEXT_STYLES.md}`}>
          {buttonLabel}
        </button>
      </div>
    </div>
  );
}

export default FeaturedCard