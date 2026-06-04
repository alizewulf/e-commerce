import { useState } from "react"
import Dropdown from "./dropdowns/LanguageDropdown"
import type { StateProps } from "../../../interfaces/interface"
import { headerTranslations } from "../../../utils/translations/header";
import Nav from "./nav/Nav";
import type { DropdownType } from "../../../interfaces/interface";
import { TITLE_TEXT_STYLES } from "../../../shared/styles/textVariables";

function Header({state, setState}:StateProps) {
    const t = headerTranslations[state.lang as keyof typeof headerTranslations];
    const [dropdown, setDropdown] = useState<DropdownType>(null);
    return (
        <header className="flex flex-col gap-10">
            <div className="flex flex-row bg-black p-3.5 text-white items-center">
                <p className={`${TITLE_TEXT_STYLES.sm} mx-auto`}>{t.sale}<span className="cursor-pointer font-semibold ml-2 underline">{t.shop}</span></p>
                <Dropdown state={state}  setState={setState} dropdown={dropdown} setDropdown={setDropdown}/>
            </div>
            <Nav state={state} setState={setState} dropdown={dropdown} setDropdown={setDropdown}/>
        </header>
    )
}

export default Header