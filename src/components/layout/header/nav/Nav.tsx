import { translations } from "../../../../utils/translations"
import LoupeSVG from '../../../../ui/icons/Loupe'
import HeartSVG from "../../../../ui/icons/Heart";
import type { Props } from "../../../../interfaces/interface";
import { useState } from "react";
import CartSVG from "../../../../ui/icons/Cart";
import { NavLink } from "react-router-dom";
import UserDropdown from "../dropdowns/UserDropdown";


function Nav({state, dropdown, setDropdown, setState}:Props) {
    const t = translations[state.lang as keyof typeof translations];
    const [loupeState, setLoupeState] = useState<boolean>(false)

    function changeLoupe() {
        setLoupeState(prev => !prev)
    }
    const navItems = [
        { key: "homePage", path:"/"},
        { key: "contactPage", path:"/contact"},
        { key: "about", path:"/about"},
        { key: "signup", path:"/signup"},
    ];

    return (
        <nav className="flex border-b border-border/30 px-33.75 pb-4 justify-between items-center">
            <NavLink to="/">
                <h1 className="text-black font-bold tracking-[3%] leading-6">Exclusive</h1>
            </NavLink>
            <div className="flex gap-12 text-base font-poppins leading-6">
            {navItems.map(item => (
                <NavLink
                key={item.key}
                to={item.path}
                className={({ isActive }) =>
                    `cursor-pointer ${isActive ? "border-b-2 border-black" : ""}`
                }
                >
                {t[item.key as keyof typeof t]}
                </NavLink>
            ))}
            </div>
            <div className="flex gap-7.5">
                <div className="relative">
                <input type="text" placeholder={t.searchInput} onBlur={() => changeLoupe()} onFocus={() => changeLoupe()} className="bg-secondary py-2.5 px-5"/>
                {loupeState === false? <LoupeSVG className="absolute right-6.25 top-3.25" color="transparent"/> : ""}
                </div>
                <div className="flex gap-4">
                    <button className="cursor-pointer"><HeartSVG color="transparent"/></button>
                    <button className="cursor-pointer"><CartSVG/></button>
                    {state.isAuth && (
                        <UserDropdown state={state}  setState={setState} dropdown={dropdown} setDropdown={setDropdown}/>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Nav