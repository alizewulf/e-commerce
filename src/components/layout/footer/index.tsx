import { translations } from "../../../utils/translations";
import type { StateProps } from "../../../interfaces/interface";
import SendEmailSVG from "../../../ui/icons/SendEmail";
import { useState } from "react";
import QRIMG from '/Qrcode1.png';
import AppStoreImg from '/download-appstore.png'
import PlayStoreIMG from '/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png'
function Footer({state}:StateProps) {
  const t = translations[state.lang as keyof typeof translations];
  const [SVGState, setSVGState] = useState<boolean>(false)
  function changeSVG() {
    setSVGState(prev => !prev)
  }
  const h3Style = "text-xl font-poppins leading-7"
  const subHelp = "w-43.5 flex flex-col text-base gap-4"
  return (
    <footer className="mt-35 bg-black flex flex-col text-white h-[500px]">
      <section className="flex justify-around pt-20">

        <div className="flex flex-col">
            <div className="flex flex-col gap-6">
                <span className="text-2xl font-bold leading-6 tracking-[3%]">{t.exclusive}</span>
                <span>{t.subscribe}</span>
            </div>
            <div className="flex flex-col gap-4 w-[210px]">
              <span>{t.firstOrderDiscount}</span>
              <div className="relative">
              <input type="email" onBlur={() => changeSVG()} onFocus={() => changeSVG()} placeholder={t.enterEmail} className="placeholder:rounded-sm outline-2 py-3 w-52.5 h-12 outline-white font-poppins text-base placeholder:text-text/40"/>
              {!SVGState && (
                <SendEmailSVG color="none" className="absolute right-4.25 top-1/2 -translate-y-1/2"/>
              )}
              </div>
            </div>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className={h3Style}>{t.support}</h3>
            <address>
              <ul className={subHelp}>
                <li>{t.address}</li>
                <li>{t.email}</li>
                <li>{t.phone}</li> 
              </ul>
            </address>            
        </div>

        <div className="flex flex-col gap-6">
            <h3 className={h3Style}>{t.account}</h3>
            <ul className={subHelp}>
              <li>{t.myAccount}</li>
              <li>{t.loginRegister}</li>
              <li>{t.cart}</li>
              <li>{t.wishlist}</li>
              <li>{t.shop}</li>
            </ul>
        </div>

        <div className="flex flex-col gap-6">
            <h3 className={h3Style}>{t.quickLink}</h3>
              <ul className={subHelp}>
                <li>{t.privacyPolicy}</li>
                <li>{t.termsOfUse}</li>
                <li>{t.faq}</li>
                <li>{t.contact}</li>
              </ul>
        </div>

        <div className="flex flex-col gap-6">
            <h3 className={h3Style}>Download App</h3>
            <span>{t.appDiscount}</span>
            <div className="flex gap-2.5">
              <img src={QRIMG} className="cursor-pointer" alt="QR Image"/>
              <div className="flex flex-col gap-1.5">
                <img src={PlayStoreIMG} className="cursor-pointer" alt="Playstore Image"/>
                <img src={AppStoreImg} alt="AppStore Image" className="cursor-pointer"/>
              </div>
            </div>
        </div>

      </section>
    </footer>
  );
}

export default Footer;
