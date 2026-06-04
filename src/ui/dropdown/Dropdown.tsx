import { useEffect } from "react";
import type { CSSProperties, ReactNode } from "react";

type DropdownItem = {
  id: string;
  label: string;
  icon?: ReactNode;
  onClick?: () => void;
};

type Props<T extends string = string> = {
  dropdown: T | null;
  setDropdown: React.Dispatch<React.SetStateAction<T | null>>;
  trigger: ReactNode;
  items: DropdownItem[];
  name: T;
  className?: string;
  panelClassName?: string;
  panelStyle?: CSSProperties;
};

function Dropdown<T extends string = string>({ dropdown, setDropdown, trigger, items, name, className, panelClassName, panelStyle }: Props<T>) {
  useEffect(() => {
    const handleClick = () => setDropdown(null);

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [setDropdown]);

  return (
    <div className={`relative ${className || ""}`}>
      <div
        onClick={(e) => {
          e.stopPropagation();
          setDropdown((prev) => (prev === name ? null : name));
        }}
      >
        {trigger}
      </div>

      {dropdown === name && (
        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute top-9 right-0 bg-black/65 backdrop-blur-xs text-white rounded-sm ${panelClassName || ""}`}
          style={{ animation: "var(--animate-show-dropdown)", ...(panelStyle || {}) }}
        >
          <ul className="flex flex-col gap-3 p-4 text-sm">
            {items.map((item) => (
              <li
                key={item.id}
                onClick={() => {
                  item.onClick?.();
                  setDropdown(null);
                }}
                className="flex gap-2 items-center cursor-pointer"
              >
                {item.icon}
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;