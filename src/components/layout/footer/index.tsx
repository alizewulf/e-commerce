import { translationsFooter } from "../../../utils/translations/footer";
import type { StateProps } from "../../../interfaces/interface";

import SendEmailSVG from "../../../ui/icons/SendEmail";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import QRIMG from "/Qrcode1.png";
import AppStoreImg from "/download-appstore.png";
import PlayStoreIMG from "/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png";

import InstagramSVG from "../../../assets/icon-instagram.svg";
import LinkedInSVG from "../../../assets/Icon-Linkedin.svg";
import TwitterSVG from "../../../assets/Icon-Twitter.svg";
import FacebookSVG from "../../../assets/Icon-Facebook.svg";

type FooterLinkItem = {
  label: string;
  to: string;
};

type FooterSection =
  | {
      title: string;
      items: string[];
      type: "text";
    }
  | {
      title: string;
      items: FooterLinkItem[];
      type: "links";
    };

function Footer({ state }: StateProps) {
  const t = translationsFooter[state.lang as keyof typeof translationsFooter];

  const [showIcon, setShowIcon] = useState(false);

  const footerSections: FooterSection[] = [
    {
      title: t.support.title,
      type: "text",
      items: [t.support.address, t.support.email, t.support.phone],
    },
    {
      title: t.account.title,
      type: "links",
      items: [
        { label: t.account.myAccount, to: "/myaccount" },
        { label: t.account.loginRegister, to: "/signup" },
        { label: t.account.cart, to: "/cart" },
        { label: t.account.wishlist, to: "/wishlist" },
        { label: t.shop.title, to:"/shop"}
      ],
    },
    {
      title: t.quickLinks.title,
      type: "text",
      items: [
        t.quickLinks.privacyPolicy,
        t.quickLinks.termsOfUse,
        t.quickLinks.faq,
        t.quickLinks.contact,
      ],
    },
  ];

  const mediaIcons = [FacebookSVG, TwitterSVG, InstagramSVG, LinkedInSVG];

  const h3Style = "text-xl font-poppins leading-7";
  const ulStyle = "flex flex-col gap-4 max-w-52";

  return (
    <footer className="mt-35 bg-black flex flex-col text-white">
      <section className="flex justify-around pt-20">
        <div className="flex flex-col gap-6">
          <span className="text-2xl font-bold">{t.brand.exclusive}</span>
          <span>{t.brand.subscribe}</span>

          <div className="flex flex-col gap-4 w-52.5">
            <span>{t.brand.firstOrderDiscount}</span>

            <div className="relative">
              <input
                type="email"
                onBlur={() => setShowIcon(false)}
                onFocus={() => setShowIcon(true)}
                placeholder={t.brand.enterEmail}
                className="outline-2 py-3 w-52.5 h-12 outline-white text-base placeholder:text-white/40"
              />

              {!showIcon && (
                <SendEmailSVG className="absolute right-4 top-1/2 -translate-y-1/2" />
              )}
            </div>
          </div>
        </div>

        {footerSections.map((section, index) => (
          <div key={index} className="flex flex-col gap-6">
            <h3 className={h3Style}>{section.title}</h3>

            <ul className={ulStyle}>
              {section.type === "links"
                ? section.items.map((item, i) => (
                    <li key={i}>
                      <NavLink to={item.to} className="hover:underline">
                        {item.label}
                      </NavLink>
                    </li>
                  ))
                : section.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
            </ul>
          </div>
        ))}

        <div className="flex flex-col gap-6 max-w-60">
          <h3 className={h3Style}>{t.app.downloadApp}</h3>
          <span>{t.app.appDiscount}</span>

          <div className="flex gap-2.5">
            <img src={QRIMG} alt="QR" />

            <div className="flex flex-col gap-1.5">
              <img src={PlayStoreIMG} alt="Play Store" />
              <img src={AppStoreImg} alt="App Store" />
            </div>
          </div>

          <div className="flex gap-6">
            {mediaIcons.map((icon, i) => (
              <img key={i} src={icon} alt="social icon" />
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-white/20 mt-15 py-4 flex justify-center">
        <p className="text-white/20 text-base">
          © Copyright Rimel 2022. All right reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;