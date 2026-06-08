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
import type { CardData, StateProps } from "../../../interfaces/interface";
import { getTranslation } from "../../../utils/translations";
import { featuredSectionTranslations } from "../../../utils/translations/featuredSection";
import FeaturedCard from "./FeaturedCard";


function FeaturedSection({ state }: StateProps) {
  const t = getTranslation(featuredSectionTranslations, state.lang);

  const bottomCards: CardData[] = [
    {
      title: t.speakersTitle,
      description: t.speakersDescription,
      image: Speaker,
      alt: "Speakers IMG",
      buttonLabel: t.button,
    },
    {
      title: t.perfumeTitle,
      description: t.perfumeDescription,
      image: Parfume,
      alt: "Parfume",
      buttonLabel: t.button,
    },
  ];

  return (
    <section className="flex gap-15 flex-col">
      <Heading textContent={t.heading} subTitle={t.subtitle} />

      <div className="flex flex-row w-full gap-8 justify-between h-150">
        <div className="flex flex-col relative bg-black w-1/2">
          <img
            src={Playstation}
            alt="playstation img"
            className="absolute bottom-0 select-none -translate-x-1/2 z-0 left-1/2"
          />
          <div className="flex flex-col items-start h-full justify-end p-8 text-white z-1 gap-4">
            <p className={`${HEADING_TEXT_STYLES.xs} font-semibold`}>
              {t.mainTitle}
            </p>
            <span className={TITLE_TEXT_STYLES.sm}>
              {t.mainDescriptionLine1}
              <br />
              {t.mainDescriptionLine2}
            </span>
            <button className={`cursor-pointer underline ${TITLE_TEXT_STYLES.md}`}>
              {t.button}
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-6 w-1/2 h-full">
          <div className="flex flex-row bg-[#0D0D0D] relative h-full">
            <img
              src={womanWithHat}
              alt="woman with hat"
              className="absolute right-0 bottom-0"
            />
            <div className="flex flex-col justify-end items-start text-white p-6 gap-4">
              <h3 className={`${HEADING_TEXT_STYLES.xs} font-semibold`}>
                {t.womenTitle}
              </h3>
              <p className={TITLE_TEXT_STYLES.sm}>
                {t.womenDescriptionLine1}
                <br />
                {t.womenDescriptionLine2}
              </p>
              <button className={`cursor-pointer underline ${TITLE_TEXT_STYLES.md}`}>
                {t.button}
              </button>
            </div>
          </div>

          <div className="flex w-full h-full gap-5">
            {bottomCards.map((card) => (
              <FeaturedCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-35">
        <MergedCards state={state} />
      </div>
    </section>
  );
}

export default FeaturedSection;
