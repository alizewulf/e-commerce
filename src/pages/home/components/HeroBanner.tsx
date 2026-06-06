import MobilePNG from "../../../assets/mobile.png";
import AppleSVG from "../../../assets/Icon-Apple.svg";
import SecondaryArrowSVG from "../../../ui/icons/SecondaryArrow";
import { HEADING_TEXT_STYLES, TITLE_TEXT_STYLES } from "../../../shared/styles/textVariables";

export function HeroBanner() {
  return (
    <div className="bg-black w-full text-white h-87.5 relative">
      <div className="flex flex-col w-fit gap-5 px-16 pt-15 h-fit">
        <div className="flex flex-row items-center gap-6">
          <img src={AppleSVG} alt="Apple Icon" />
          <p className={TITLE_TEXT_STYLES.md}>iPhone 14 Series</p>
        </div>

        <h2 className={HEADING_TEXT_STYLES.xl}>
          Up to 10% <br /> off Voucher
        </h2>

        <button className={`${TITLE_TEXT_STYLES.md} w-40 cursor-pointer flex items-center gap-3 underline`}>
          Shop Now <SecondaryArrowSVG />
        </button>
      </div>

      <img src={MobilePNG} alt="Mobile Icon" className="absolute right-0 top-0 z-0" />
    </div>
  );
}