import { useState } from "react"
import Dropdown from "./dropdowns/LanguageDropdown"
import type { StateProps } from "../../../interfaces/interface"
import { translations } from "../../../utils/translations";
import Nav from "./nav/Nav";

type DropdownType = "language" | "profile" | null;

function Header({state, setState}:StateProps) {
    const t = translations[state.lang as keyof typeof translations];
    const [dropdown, setDropdown] = useState<DropdownType>(null);
    return (
        <header className="flex flex-col gap-10">
            <div className="flex flex-row bg-black p-3.5 text-white items-center">
                <p className="font-poppins text-sm leading-5.25 mx-auto">{t.sale}<span className="cursor-pointer font-semibold ml-2 underline">{t.shop}</span></p>
                <Dropdown state={state}  setState={setState} dropdown={dropdown} setDropdown={setDropdown}/>
            </div>
            <Nav state={state} setState={setState}/>
        </header>
    )
}

export default Header