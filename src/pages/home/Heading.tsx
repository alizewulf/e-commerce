import type { ReactNode } from "react";
import { HEADING_TEXT_STYLES, TITLE_TEXT_STYLES } from "../../shared/styles/textVariables";

type HeadingProps = {
    textContent: string
    subTitle: string
    children?: ReactNode
}

function Heading({textContent, subTitle, children}:HeadingProps) {
  return (
    <div className="flex flex-col gap-6">
        <div className="flex gap-4 items-center">
          <div className="w-5 h-10 rounded-sm bg-secondary-2"></div>
          <p
            className={`${TITLE_TEXT_STYLES.md} font-semibold text-secondary-2`}
          >
            {textContent}
          </p>
        </div>
        <div className="flex gap-22.5 items-center">
          <p className={`${HEADING_TEXT_STYLES.md} font-semibold capitalize`}>
            {subTitle}
          </p>
          {children}
        </div>
    </div>
  );
}

export default Heading