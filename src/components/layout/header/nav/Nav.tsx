import { headerTranslations } from "../../../../utils/translations/header";
import LoupeSVG from "../../../../ui/icons/Loupe";
import HeartSVG from "../../../../ui/icons/Heart";
import type { Props } from "../../../../interfaces/interface";
import { useState } from "react";
import CartSVG from "../../../../ui/icons/Cart";
import { NavLink, useNavigate } from "react-router-dom";
import Dropdown from "../../../../ui/dropdown/Dropdown";
import DropdownUserIcon from "../../../../ui/icons/DropdownUserIcon";
import UserIconSVG from "../../../../ui/icons/UserIcon";
import CancelSVG from "../../../../ui/icons/Cancellations";
import LogoutSVG from "../../../../ui/icons/Logout";
import OrdersSVG from "../../../../ui/icons/Orders";
import StarSVG from "../../../../ui/icons/Star";
import { dropdownTranslations } from "../../../../utils/translations/userDropdown";
import { TITLE_TEXT_STYLES } from "../../../../shared/styles/textVariables";

function Nav({ state, dropdown, setDropdown, setState }: Props) {
  const t = headerTranslations[state.lang as keyof typeof headerTranslations];
  const tDropdown = dropdownTranslations[state.lang as keyof typeof dropdownTranslations];
  const [loupeState, setLoupeState] = useState<boolean>(false);

  function changeLoupe() {
    setLoupeState((prev) => !prev);
  }

  function logOut(): void {
    localStorage.removeItem("user");
    if (!setState) return;
    setState((prev) => ({
      ...prev,
      isAuth: false,
      user: null,
    }));
  }
  const navigate = useNavigate()
  function handleNavigate() {
    navigate('/manage-account')
  }
  const userDropdownItems = [
    {
      id: "manageAccount",
      label: tDropdown.manageAccount,
      icon: <DropdownUserIcon color="transparent" />,
      onClick: handleNavigate
    },
    {
      id: "myOrder",
      label: tDropdown.myOrder,
      icon: <OrdersSVG color="transparent" className="w-6 h-6" />,
    },
    {
      id: "myCancellations",
      label: tDropdown.myCancellations,
      icon: <CancelSVG color="transparent" className="w-6 h-6" />,
    },
    {
      id: "myReviews",
      label: tDropdown.myReviews,
      icon: <StarSVG color="transparent" className="w-6 h-6" />,
    },
    {
      id: "logout",
      label: tDropdown.logout,
      icon: <LogoutSVG color="transparent" className="w-6 h-6" />,
      onClick: logOut,
    },
  ];

  const navItems = [
    { key: "homePage", path: "/" },
    { key: "contactPage", path: "/contact" },
    { key: "about", path: "/about" },
    { key: "signup", path: "/signup" },
  ];

  return (
    <nav className="flex border-b border-border/30 px-33.75 pb-4 justify-between items-center">
      <NavLink to="/">
        <h1 className="text-black font-bold tracking-[3%] leading-6">
          Exclusive
        </h1>
      </NavLink>
      <div className={`flex gap-12 ${TITLE_TEXT_STYLES.md}`}>
        {state.isAuth &&
          navItems.map((item) =>
            item.key === "signup" ? (
              ""
            ) : (
              <NavLink
                key={item.key}
                to={item.path}
                className={({ isActive }) =>
                  `cursor-pointer ${isActive ? "border-b-2 border-black" : ""}`
                }
              >
                {t[item.key as keyof typeof t]}
              </NavLink>
            ),
          )}
        {!state.isAuth &&
          navItems.map((item) => (
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
          <input
            type="text"
            placeholder={t.searchInput}
            onBlur={() => changeLoupe()}
            onFocus={() => changeLoupe()}
            className="bg-secondary py-2.5 px-5"
          />
          {loupeState === false ? (
            <LoupeSVG
              className="absolute right-6.25 top-3.25"
              color="transparent"
            />
          ) : (
            ""
          )}
        </div>
        <div className="flex gap-4">
          <button className="cursor-pointer">
            <HeartSVG color="transparent" />
          </button>
          <button className="cursor-pointer">
            <CartSVG />
          </button>
          {state.isAuth && (
            <Dropdown
              dropdown={dropdown}
              setDropdown={setDropdown}
              trigger={
                <button className="cursor-pointer rounded-[47px] py-2 px-2.5 active:bg-secondary-2 hover:bg-hover-button">
                  <UserIconSVG color="white" />
                </button>
              }
              items={userDropdownItems}
              name="profile"
              className="relative"
              panelClassName="top-[50px] right-0"
            />
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
