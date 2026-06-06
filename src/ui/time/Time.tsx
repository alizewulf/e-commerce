import type { ReactNode } from "react";
import {
  HEADING_TEXT_STYLES,
  TITLE_TEXT_STYLES,
} from "../../shared/styles/textVariables";
type TabelType = "primary" | "secondary";
type TimeProps = {
  timeType: string;
  currentTime: string;
  className?: string;
  children?: ReactNode;
  type: TabelType;
};

function Time({
  timeType,
  type = "primary",
  currentTime,
  className,
  children,
}: TimeProps) {
  return (
    <>
      {type === "primary" ? (
        <div className={`flex items-center gap-4 ${className}`}>
          <div className="flex gap-2 items-center flex-col">
            <span className={TITLE_TEXT_STYLES.xs}>{timeType}</span>
            <span className={`${HEADING_TEXT_STYLES.sm} font-bold`}>
              {currentTime}
            </span>
          </div>
          {children}
        </div>
      ) : (
        <div className={`flex items-center flex-col rounded-full bg-white p-4 justify-center w-15.5 h-15.5 ${className}`}>
            <span className={`${TITLE_TEXT_STYLES.md} font-bold`}>
              {currentTime}
            </span>
            <span className={TITLE_TEXT_STYLES.xs}>{timeType}</span>
        </div>
      )}
    </>
  );
}

export default Time;
