import type { Props } from "../../../../interfaces/interface";
import CancelSVG from "../../../../ui/icons/Cancellations";
import LogoutSVG from "../../../../ui/icons/Logout";
import OrdersSVG from "../../../../ui/icons/Orders";
import StarSVG from "../../../../ui/icons/Star";
import DropdownUserIcon from "../../../../ui/icons/DropdownUserIcon";
import { translations } from "../../../../utils/translations";
import UserIconSVG from "../../../../ui/icons/UserIcon";

function UserDropdown({ dropdown, setDropdown, state }: Props) {
    const SVGStyle = "w-6 h-6"
    const t = translations[state.lang as keyof typeof translations];
    const translate = [{
      id: "manageAccount",
      label: t.manageAccount,
      svg: <DropdownUserIcon color="transparent" />,
    },
    {
      id: "myOrder",
      label: t.myOrder,
      svg: <OrdersSVG color="transparent" className={SVGStyle}/>,
    },
    {
      id: "myCancellations",
      label: t.myCancellations,
      svg: <CancelSVG color="transparent" className={SVGStyle} />,
    },
    {
      id: "myReviews",
      label: t.myReviews,
      svg: <StarSVG color="transparent" className={SVGStyle} />,
    },
    {
      id: "logout",
      label: t.logout,
      svg: <LogoutSVG color="transparent" className={SVGStyle} />,
    }
  ]

    return (
    <div className="relative">
      <button
        className="cursor-pointer rounded-[47px] py-2 px-2.5 active:bg-secondary-2 hover:bg-hover-button"
        onClick={(e) => {
          e.stopPropagation();

          setDropdown((prev) => (prev === "profile" ? null : "profile"));
        }}
      >
        <UserIconSVG color="white" />
      </button>
      {dropdown === "profile" && (
        <div className="absolute w-56.25 top-13 right-3.75 bg-black/65 backdrop-blur-xs rounded-sm text-white">
          <ul className="text-sm justify-start pb-2.5 pt-4.5 pl-5 flex gap-3 flex-col font-poppins">
            {translate.map(lang => (
              <li className="flex gap-2.5 leading-5.25 items-center cursor-pointer w-max h-max" key={lang.id}>
                  {lang.svg} {lang.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default UserDropdown;
