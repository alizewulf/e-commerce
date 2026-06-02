import type { ReactNode } from "react";

type buttonType = "submit"

type PrimaryButton = {
    children: ReactNode,
    className?: string,
    type?: buttonType
}
function PrimaryButton({children, className, type}:PrimaryButton) {
  const ButtonStyle = "text-white cursor-pointer font-poppins text-base leading-6 bg-button-2 hover:bg-hover-button py-4 px-12"
  return (
    <button type={type} className={`${ButtonStyle} ${className}`}>
      {children}
    </button>
  );
}
export default PrimaryButton