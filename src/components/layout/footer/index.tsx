import { translations } from "../../../utils/translations";
import type { StateProps } from "../../../interfaces/interface";
import SendEmailSVG from "../../../ui/icons/SendEmail";
import { useState } from "react";

import QRIMG from "/Qrcode1.png";
import AppStoreImg from "/download-appstore.png";
import PlayStoreIMG from "/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png";

import InstagramSVG from "../../../assets/icon-instagram.svg";
import LinkedInSVG from "../../../assets/Icon-Linkedin.svg";
import TwitterSVG from "../../../assets/Icon-Twitter.svg";
import FacebookSVG from "../../../assets/Icon-Facebook.svg";

function Footer({ state }: StateProps) {
  const t = translations[state.lang as keyof typeof translations];

  const [SVGState, setSVGState] = useState<boolean>(false);

  function changeSVG() {
    setSVGState(prev => !prev);
  }

  const mediaIcons = [FacebookSVG, TwitterSVG, InstagramSVG, LinkedInSVG];

  const footerSections = [
    {
      title: t.support,
      items: [t.address, t.email, t.phone],
    },
    {
      title: t.account,
      items: [t.myAccount, t.loginRegister, t.cart, t.wishlist, t.shop],
    },
    {
      title: t.quickLink,
      items: [t.privacyPolicy, t.termsOfUse, t.faq, t.contact],
    },
  ];

  const h3Style = "text-xl font-poppins leading-7";
  const subHelp = "w-43.5 flex flex-col text-base gap-4";

  return (
    <footer className="mt-35 bg-black flex flex-col text-white">
      <section className="flex justify-around pt-20">
        <div className="flex flex-col">
          <div className="flex flex-col gap-6">
            <span className="text-2xl font-bold leading-6 tracking-[3%]">
              {t.exclusive}
            </span>
            <span>{t.subscribe}</span>
          </div>

          <div className="flex flex-col gap-4 w-[210px]">
            <span>{t.firstOrderDiscount}</span>

            <div className="relative">
              <input
                type="email"
                onBlur={changeSVG}
                onFocus={changeSVG}
                placeholder={t.enterEmail}
                className="placeholder:rounded-sm outline-2 py-3 w-52.5 h-12 outline-white font-poppins text-base placeholder:text-text/40"
              />

              {!SVGState && (
                <SendEmailSVG
                  color="none"
                  className="absolute right-4.25 top-1/2 -translate-y-1/2"
                />
              )}
            </div>
          </div>
        </div>

        {footerSections.map(section => (
          <div className="flex flex-col gap-6" key={section.title}>
            <h3 className={h3Style}>{section.title}</h3>

            <ul className={subHelp}>
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}

        <div className="flex flex-col gap-6">
          <h3 className={h3Style}>Download App</h3>

          <span>{t.appDiscount}</span>

          <div className="flex gap-2.5">
            <img src={QRIMG} className="cursor-pointer" alt="QR Image" />

            <div className="flex flex-col gap-1.5">
              <img
                src={PlayStoreIMG}
                className="cursor-pointer"
                alt="Playstore Image"
              />
              <img src={AppStoreImg} alt="AppStore Image" className="cursor-pointer" />
            </div>
          </div>

          <div className="flex gap-6">
            {mediaIcons.map((icon, i) => (
              <button key={i} className="cursor-pointer">
                <img src={icon} alt="Social Media Icon" />
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="flex border-t-white/40 pt-4 pb-6 border-t justify-center items-end h-full mt-15">
        <p className="text-white/20 text-base font-poppins leading-6">
          © Copyright Rimel 2022. All right reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;