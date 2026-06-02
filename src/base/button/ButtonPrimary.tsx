import type { ReactNode } from "react";

type PrimaryButton = {
    children: ReactNode,
    className?: string,
}
function PrimaryButton({children, className}:PrimaryButton) {
  const ButtonStyle = "text-white cursor-pointer font-poppins text-base leading-6 bg-button-2 hover:bg-hover-button py-4 px-12"
  return (
    <button className={`${ButtonStyle} ${className}`}>
      {children}
    </button>
  );
}
export default PrimaryButton