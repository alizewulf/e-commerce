import { useState } from "react"
import Dropdown from "../../../shared/ui/dropdown/Dropdown"
import type { StateProps } from "../../../interfaces/interface"
import { headerTranslations } from "../../../utils/translations/header";
import { languages } from "../../../utils/languages";
import ArrowSVG from "../../../shared/ui/icons/Arrow";
import Nav from "./nav/Nav";
import type { DropdownType } from "../../../interfaces/interface";
import { TITLE_TEXT_STYLES } from "../../../shared/styles/textVariables";

function Header({state, setState}:StateProps) {
    const t = headerTranslations[state.lang as keyof typeof headerTranslations];
    const [dropdown, setDropdown] = useState<DropdownType>(null);

    const languageItems = languages.map((language) => ({
      id: language.code,
      label: language.label,
      onClick: () => {
        if (!setState) return;
        setState((prev) => ({
          ...prev,
          lang: language.code,
        }));
        localStorage.setItem("lang", language.code);
      },
    }));

    const currentLanguage = languages.find((lang) => lang.code === state.lang)?.label ?? "";

    return (
        <header className="flex flex-col gap-10">
            <div className="flex flex-row bg-black p-3.5 text-white items-center">
                <p className={`${TITLE_TEXT_STYLES.sm} mx-auto`}>{t.sale}<span className="cursor-pointer font-semibold ml-2 underline">{t.shop}</span></p>
                <Dropdown
                  dropdown={dropdown}
                  setDropdown={setDropdown}
                  trigger={
                    <button className="flex items-center gap-3 cursor-pointer">
                      <span>{currentLanguage}</span>
                      <ArrowSVG />
                    </button>
                  }
                  items={languageItems}
                  name="language"
                  className={`flex items-center gap-3 ${TITLE_TEXT_STYLES.sm}`}
                />
            </div>
            <Nav state={state} setState={setState} dropdown={dropdown} setDropdown={setDropdown}/>
        </header>
    )
}

export default Header