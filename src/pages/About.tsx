import Card from "../ui/cards/Card";
import MoneyBagSVG from "../ui/icons/MoneyBag";
import SaleSVG from "../ui/icons/SaleIcon";
import ShoppingSVG from "../ui/icons/ShoppingIcon";
import StoreSVG from "../ui/icons/StoreIcon";
import HeroIMG from "/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png";
import Staff1 from "/Frame 874.png";
import Staff2 from "/Frame 875.png";
import Staff3 from "/Frame 876.png";
import StaffCard from "../ui/cards/StaffMembers";
import { aboutPageTranslation } from "../utils/translations/aboutPage";
import type { StateProps } from "../interfaces/interface";
import { HEADING_TEXT_STYLES, TITLE_TEXT_STYLES} from "../shared/styles/textVariables";
import MergedCards from "../ui/cards/Card/Card.merge";


function AboutPage({ state }: StateProps) {
  const t =
    aboutPageTranslation[state.lang as keyof typeof aboutPageTranslation];
  return (
    <section className="mt-20 flex gap-35 flex-col">
      <div className="px-33.75 flex font-poppins">
        <p className={`${TITLE_TEXT_STYLES.sm} text-black/50`}>
          Home / <span className="text-black">About</span>
        </p>
      </div>

      <div className="flex justify-around">
        <div className="mt-30  text-black flex flex-col">
          <h1 className={`${HEADING_TEXT_STYLES.xxl} font-semibold `}>
            {t.ourStory}
          </h1>
          <div className="flex flex-col gap-6 mt-10 font-poppins w-131.25">
            <p>{t.launchText}</p>
            <p>{t.offerText}</p>
          </div>
        </div>
        <div className="mt-10.50">
          <img src={HeroIMG} alt="Hero Image" />
        </div>
      </div>

      <div className="flex justify-around">

          <Card variant="primary" headingText="10.5k" titleText={t.sellersActiveSite}>
            <StoreSVG/>
          </Card>

          <Card variant="secondary" headingText="33k" svgBgClass="bg-white" titleText={t.monthlyProductSale}>
            <SaleSVG/>
          </Card>

          <Card variant="primary" headingText="45.5k" titleText={t.customersActiveSite}>
            <ShoppingSVG/>
          </Card>

          <Card variant="primary" headingText="25k" titleText={t.annualGrossSale}>
            <MoneyBagSVG/>
          </Card>
          
      </div>

      <div className="flex flex-col gap-10">
        <div className="flex justify-around">
          <StaffCard
            memberName="Tom Cruise"
            memberPosition={t.founderChairman}
            staffImg={Staff1}
          />
          <StaffCard
            memberName="Emma Watson"
            memberPosition={t.managingDirector}
            staffImg={Staff2}
          />
          <StaffCard
            memberName="Will Smith"
            memberPosition={t.productDesigner}
            staffImg={Staff3}
          />
        </div>
        <div className="flex justify-center gap-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              className="bg-red-900 w-3 h-3 rounded-full"
              key={i}
            ></span>
          ))}
        </div>
      </div>
    <div className="flex justify-around">
          <MergedCards state={state}/>
    </div>
    </section>
  );
}

export default AboutPage;
