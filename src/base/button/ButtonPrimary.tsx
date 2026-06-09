import type { ReactNode } from "react";
import { TITLE_TEXT_STYLES } from "../../shared/styles/textVariables";

type buttonType = "submit"

type PrimaryButton = {
    children: ReactNode,
    className?: string,
    type?: buttonType,
    disabled?: boolean,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}
function PrimaryButton({children, className, type, disabled, onClick}:PrimaryButton) {
  const ButtonStyle = "text-white bg-button-2 hover:bg-hover-button py-4 px-12"
  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
  return (
    <button type={type} className={`${ButtonStyle} ${disabledStyles} ${TITLE_TEXT_STYLES.md} ${className}`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
export default PrimaryButton