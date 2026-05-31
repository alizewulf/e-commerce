import type { StateProps } from "../../../../App";
import ArrowSVG from "../../../../ui/icons/Arrow";
import { languages } from "../../../../utils/languages";
import { useEffect } from "react";

interface Props extends StateProps {
  dropdown: boolean;
  setDropdown: React.Dispatch<React.SetStateAction<boolean>>;
}

function Dropdown({dropdown, setDropdown, setState, state }:Props) {
  {useEffect(() => {
  document.documentElement.addEventListener(`click`, () => {
    setDropdown(false)
  })
}),[]}

  return (
    <div className="flex cursor-pointer relative gap-3 text-sm font-poppins items-center">
      <button
        onClick={() => {
          setDropdown((prev) => !prev)
          event?.stopPropagation()
        }}
        className="flex items-center gap-3 cursor-pointer"
      >
        <span>{languages.find(lang => lang.code === state.lang)?.label}</span>
        <ArrowSVG />
      </button>
      
      {dropdown && (
        <div className="absolute left-[40%] -translate-x-1/2 top-9.25 bg-black">
          <ul className="flex flex-col gap-2 font-poppins text-sm p-6">
            {languages.map((language) => (
              <li
                key={language.code}
                onClick={() => {
                  setState({
                    lang: language.code,
                  });

                  setDropdown(false);
                }}
              >
                {language.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;


