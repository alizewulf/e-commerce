import type { ReactNode } from "react";
import { TITLE_TEXT_STYLES } from "../../shared/styles/textVariables";

type buttonType = "submit"

type PrimaryButton = {
    children: ReactNode,
    className?: string,
    type?: buttonType
}
function PrimaryButton({children, className, type}:PrimaryButton) {
  const ButtonStyle = "text-white cursor-pointer bg-button-2 hover:bg-hover-button py-4 px-12"
  return (
    <button type={type} className={`${ButtonStyle} ${TITLE_TEXT_STYLES.md} ${className}`}>
      {children}
    </button>
  );
}
export default PrimaryButton