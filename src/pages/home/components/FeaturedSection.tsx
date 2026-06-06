import Heading from "./Heading";
import Playstation from "../../../assets/ps5-slim-goedkope-playstation_large 1.png";
import womanWithHat from "../../../assets/woman1.png";
import Parfume from "../../../assets/652e82cd70aa6522dd785109a455904c.png";
import Speaker from "../../../assets/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png";
import {
  HEADING_TEXT_STYLES,
  TITLE_TEXT_STYLES,
} from "../../../shared/styles/textVariables";
import MergedCards from "../../../ui/cards/Card/Card.merge";
import type { StateProps } from "../../../interfaces/interface";

function FeaturedSection({state}:StateProps) {
  return (
    <section className="flex gap-15 flex-col">
      <Heading textContent="Featured" subTitle="New Arrival" />

      <div className="flex flex-row w-full gap-8 justify-between h-[600px]">
        <div className="flex flex-col relative bg-black w-1/2">
          <img
            src={Playstation}
            alt="playstation img"
            className="absolute bottom-0 select-none -translate-x-1/2 z-0 left-1/2"
          />
          <div className="flex flex-col items-start h-full justify-end p-8 text-white z-1 gap-4">
            <p className={`${HEADING_TEXT_STYLES.xs} font-semibold`}>
              Playstation 5
            </p>
            <span className={TITLE_TEXT_STYLES.sm}>
              Black and White version of the PS5 <br /> coming out on sale.
            </span>
            <button
              className={`cursor-pointer underline ${TITLE_TEXT_STYLES.md}`}
            >
              Shop Now
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-6 w-1/2 h-full">
          <div className="flex flex-row  bg-[#0D0D0D] relative h-full">
            <img
              src={womanWithHat}
              alt="woman with hat"
              className="absolute right-0 bottom-0"
            />
            <div className="flex flex-col justify-end items-start text-white p-6 gap-4">
              <h3 className={`${HEADING_TEXT_STYLES.xs} font-semibold`}>
                Women's collection
              </h3>
              <p className={TITLE_TEXT_STYLES.sm}>
                Featured woman collections that <br /> give you another vibe.
              </p>
              <button
                className={`cursor-pointer underline ${TITLE_TEXT_STYLES.md}`}
              >
                Shop Now
              </button>
            </div>
          </div>

          <div className="flex w-full h-full gap-5">
            <div className="bg-[#0D0D0D] w-1/2 h-full flex relative z-2">
              <img
                src={Speaker}
                alt="Speakers IMG"
                className="absolute right-1/2 translate-1/2 bottom-1/2 z-0"
              />
              <div className="flex flex-col justify-end items-start text-white p-6 gap-4">
                <h3 className={`${HEADING_TEXT_STYLES.xs} z-2 font-semibold`}>
                  Speakers
                </h3>
                <p className={`${TITLE_TEXT_STYLES.sm} z-2`}>
                  Amazon wireless speakers
                </p>
                <button
                  className={`cursor-pointer underline z-2 ${TITLE_TEXT_STYLES.md}`}
                >
                  Shop Now
                </button>
              </div>
            </div>

            <div className="bg-[#0D0D0D] w-1/2 h-full flex relative z-2">
              <img
                src={Parfume}
                alt="Parfume"
                className="absolute right-1/2 translate-1/2 bottom-1/2 z-0"
              />
              <div className="flex flex-col justify-end items-start text-white p-6 gap-4">
                <h3 className={`${HEADING_TEXT_STYLES.xs} z-2 font-semibold`}>
                  Parfume
                </h3>
                <p className={`${TITLE_TEXT_STYLES.sm} z-2`}>
                  GUCCI INTENSE OUD EDP
                </p>
                <button
                  className={`cursor-pointer underline z-2 ${TITLE_TEXT_STYLES.md}`}
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-35">
      <MergedCards state={state}/>
      </div>
    </section>
  );
}

export default FeaturedSection;
