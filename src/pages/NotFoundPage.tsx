import { NavLink } from "react-router-dom";
import type { StateProps } from "../interfaces/app/state";
import PrimaryButton from "../base/button/ButtonPrimary";
import { pageNotFoundTranslations } from "../utils/translations/pageNotFound";
import { HEADING_TEXT_STYLES, TITLE_TEXT_STYLES } from "../shared/styles/textVariables";

function NotFoundPage({ state }: StateProps) {
  const t = pageNotFoundTranslations[state.lang as keyof typeof pageNotFoundTranslations];
  return (
    <>
      <p className={`${TITLE_TEXT_STYLES.md} text-black/50 mt-20 ml-33.75`}>
        Home / <span className="text-black">404 Error</span>
      </p>
      <div className="flex flex-col items-center justify-center mt-35 gap-10">
        <h2 className={HEADING_TEXT_STYLES.max}>
          {t.content.error404}
        </h2>
        <p>{t.content.pageNotFound}</p>
        <NavLink to={"/"}>
          <PrimaryButton children="Back to home page"/>
        </NavLink>
      </div>
    </>
  );
}

export default NotFoundPage;
