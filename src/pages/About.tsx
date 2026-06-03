import Card from "../ui/cards/Card";
import MoneyBagSVG from "../ui/icons/MoneyBag";
import SaleSVG from "../ui/icons/SaleIcon";
import ShoppingSVG from "../ui/icons/ShoppingIcon";
import StoreSVG from "../ui/icons/StoreIcon";
import HeroIMG from "/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png";
import Staff1 from "/Frame 874.png"
import Staff2 from "/Frame 875.png"
import Staff3 from "/Frame 876.png"
import StaffCard from "../ui/cards/StaffMembers";
function AboutPage() {
  return (
    <section className="mt-20 flex gap-35 flex-col">
      <div className="px-33.75 flex font-poppins">
        <p className="font-base text-black/50 leading-5.25">
          Home / <span className="text-black">About</span>
        </p>
      </div>

      <div className="flex justify-around">
        <div className="mt-30  text-black flex flex-col">
          <h1 className="font-inter text-[54px] font-semibold leading-13.5 tracking-[6%]">
            Our Story
          </h1>
          <div className="flex flex-col gap-6 mt-10 font-poppins w-131.25">
            <p>
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.{" "}
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
        </div>
        <div className="mt-10.50">
          <img src={HeroIMG} alt="Hero Image" />
        </div>
      </div>

      <div className="flex justify-around">
        <Card amount="10.5k" text="Sallers active our site">
          <StoreSVG />
        </Card>
        <Card
          text="Mopnthly Produduct Sale"
          amount="33k"
          bgColor="bg-white"
          textColor="white"
          containerColor="bg-secondary-2"
        >
          <SaleSVG color="transparent" />
        </Card>
        <Card amount="45.5k" text="Customer active in our site">
          <ShoppingSVG />
        </Card>
        <Card amount="25k" text="Anual gross sale in our site">
          <MoneyBagSVG />
        </Card>
      </div>

      <div className="flex justify-around">
        <StaffCard memberName="Tom Cruise" memberPosition="Founder & Chairman" staffImg={Staff1}/>
        <StaffCard memberName="Emma Watson" memberPosition="Managing Director" staffImg={Staff2}/>
        <StaffCard memberName="Will Smith" memberPosition="Founder & Chairman" staffImg={Staff3}/>

      </div>
    </section>
  );
}

export default AboutPage;
