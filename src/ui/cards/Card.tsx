import type { ReactNode } from "react"
import { TITLE_TEXT_STYLES, HEADING_TEXT_STYLES } from "../../shared/styles/textVariables"

type CardVariants = "primary" | "secondary" | "none"
type CardProps = {
  svgContainer?: boolean,
  svgBgClass?: string,
  variant?: CardVariants,
  showOutline?: boolean,
  children?: ReactNode,
  headingText: string | ReactNode,
  titleText: string,
}

const base = {
    heading: HEADING_TEXT_STYLES.xxxl,
    titleText: TITLE_TEXT_STYLES.md
}

const variants = {
  primary : {
    container: "border border-black/30",
    ...base
  },
  secondary: {
    container: "bg-secondary-2 text-white",
    ...base
  },
  none: {
    container: "max-w-none",
    heading: TITLE_TEXT_STYLES.xl,
    titleText: TITLE_TEXT_STYLES.sm
  }
}

function Card({
  svgContainer = true,
  svgBgClass = "bg-black",
  variant = "primary",
  showOutline = true,
  titleText = "Text Empty",
  headingText = "Heading empty",
  children
}: CardProps) {
  const getStyles = variants[variant]
  const outlineClass = showOutline ? "outline-10 outline-black/30" : ""
  const svgWrapperClass = svgContainer ? `${svgBgClass} p-2.5 rounded-full` : "p-2.5 rounded-full"

  return (
    <div className={`flex flex-col gap-6 max-w-67.5 items-center py-7.5 rounded-sm px-13 ${getStyles.container}`}>
      {children && (
      <div className={`${svgWrapperClass} ${outlineClass} flex items-center justify-center`}>
        {children}
      </div>
      )}
      <div className="flex flex-col items-center justify-center text-center gap-3">
        <span className={`${getStyles.heading} font-bold`}>{headingText}</span>
        <span className={`${getStyles.titleText}`}>{titleText}</span>
      </div>
    </div>
  )
}

export default Card