import type { ReactNode } from "react"
import { TITLE_TEXT_STYLES, HEADING_TEXT_STYLES } from "../../shared/styles/textVariables"

type CardVariants = "primary" | "secondary" | "none"
type CardProps = {
  svgContainer?: string,
  variant: CardVariants,  
  children: ReactNode,
  headingText: string,
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

function Card({svgContainer = "bg-black", variant="primary", titleText="Text Empty", headingText="Heading empty", children="Error Child Empty"}:CardProps) {  
  const getStyles = variants[variant]
  return (
    <div className={`flex flex-col gap-6 max-w-67.5 items-center py-7.5 rounded-sm px-13 ${getStyles.container}`}>
      <div className={`${svgContainer}  p-2.5 rounded-full outline-10 outline-black/30`}>
        {children}
      </div>
      <div className="flex flex-col items-center justify-center text-center gap-3">
        <span className={`${getStyles.heading}  font-bold`}>{headingText}</span>
        <span className={`${getStyles.titleText}`}>{titleText}</span>
      </div>
    </div>
  )
}

export default Card