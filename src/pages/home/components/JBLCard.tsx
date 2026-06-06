import { HEADING_TEXT_STYLES, TITLE_TEXT_STYLES } from "../../../shared/styles/textVariables";
import Clock from "../../../ui/time/Clock";
import JBLimg from "../../../assets/JBL_BOOMBOX_HERO.png"
function JBLCard() {
  return (
    <div className="flex flex-col bg-black w-full pl-14 gap-8 py-17.25 relative">
      <button
        className={`text-button-1 cursor-pointer font-semibold ${TITLE_TEXT_STYLES.md} w-fit`}
      >
        Categories
      </button>
      <h2 className={`text-white ${HEADING_TEXT_STYLES.xl} font-semibold`}>
        Enhance Your <br /> Music Experience
      </h2>
      <Clock ClockType="secondary" />
      <button
        className={`text-white bg-button-1 ${TITLE_TEXT_STYLES.md} py-4 px-12 w-fit cursor-pointer mt-2`}
      >
        Buy Now!
      </button>
      <div className="absolute right-15 top-1/2 -translate-y-1/2">
        <div className="absolute inset-0 bg-[#D9D9D9]/30 blur-3xl rounded-full scale-125" />
        <img src={JBLimg} alt="JBL Image" className="relative z-10" />
      </div>
    </div>
  );
}
export default JBLCard