import { NavLink } from "react-router-dom";
import type { StateProps } from "../interfaces/interface";
import { translations } from "../utils/translations";

function NotFoundPage({ state }: StateProps) {
  const t = translations[state.lang as keyof typeof translations];
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
          <button className="mt-10 text-white cursor-pointer font-poppins text-base leading-6 bg-button-2 hover:bg-hover-button py-4 px-12">
            Back to home page
          </button>
        </NavLink>
      </div>
    </>
  );
}

export default NotFoundPage;
