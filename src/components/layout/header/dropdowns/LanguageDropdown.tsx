import ArrowSVG from "../../../../ui/icons/Arrow";
import { languages } from "../../../../utils/languages";
import { useEffect } from "react";
import type { Props } from "../../../../interfaces/interface";
import { TITLE_TEXT_STYLES } from "../../../../shared/styles/textVariables";

function Dropdown({dropdown, setDropdown, setState, state }:Props) {
  useEffect(() => {
  const handleClick = () => {
    setDropdown(null);
  };

  document.addEventListener("click", handleClick);

  return () => {
    document.removeEventListener("click", handleClick);
  };
}, [setDropdown]);
  if (!setState) {
    return 
  }
  return (
    <div className={`flex cursor-pointer relative gap-3 ${TITLE_TEXT_STYLES.sm}items-center`}>
      <button
          onClick={(e) => {
            e.stopPropagation();

            setDropdown((prev) =>
              prev === "language" ? null : "language"
            );
          }}
        className="flex items-center gap-3 cursor-pointer"
      >
        <span>{languages.find(lang => lang.code === state.lang)?.label}</span>
        <ArrowSVG />
      </button>
      
      {dropdown === "language" && (
        <div className="absolute left-[40%] -translate-x-1/2 top-9.25 bg-black">
          <ul className={`flex items-center flex-col gap-3 ${TITLE_TEXT_STYLES.sm}`}>
            {languages.map((language) => (
              <li key={language.code}>
                  <button className="cursor-pointer p-3" onClick={() => {
                    setState((prev) => ({
                      ...prev,
                      lang: language.code
                    }))
                    localStorage.setItem("lang", language.code)
                    setDropdown(null)
                  }}>
                    {language.label}
                  </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;


