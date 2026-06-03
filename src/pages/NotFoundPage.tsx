import { NavLink } from "react-router-dom";
import type { StateProps } from "../interfaces/interface";
import PrimaryButton from "../base/button/ButtonPrimary";
import { pageNotFoundTranslations } from "../utils/translations/pageNotFound";

function NotFoundPage({ state }: StateProps) {
  const t = pageNotFoundTranslations[state.lang as keyof typeof pageNotFoundTranslations];
  return (
    <>
      <p className="text-sm font-poppins text-black/50 mt-20 ml-33.75">
        Home / <span className="text-black">404 Error</span>
      </p>
      <div className="flex flex-col items-center justify-center mt-35 gap-10">
        <h2 className="text-heading font-inter leading-28.75 tracking-[3%]">
          {t.error404}
        </h2>
        <p>{t.pageNotFound}</p>
        <NavLink to={"/"}>
          <PrimaryButton children="Back to home page"/>
        </NavLink>
      </div>
    </>
  );
}

export default NotFoundPage;
