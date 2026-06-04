import type { ReactNode } from "react"
import { TITLE_TEXT_STYLES } from "../../shared/styles/textVariables"

interface ContactCardProps {
    img: ReactNode,
    heading: string,
    container?: string,
    subtitle1: string,
    subtitle2: string,
    children?: ReactNode
}

function ContactCard({img, heading, container, subtitle1, subtitle2, children}:ContactCardProps) {
    return (
        <div className={`flex flex-col gap-8 ${container}`}>
            <div className="flex gap-4 items-center">
                <span className="bg-secondary-2 p-2.5 rounded-full">{img}</span>
                <span className={`${TITLE_TEXT_STYLES.md} font-medium`}>{heading}</span>
            </div>
            <div className={`flex flex-col gap-4 ${TITLE_TEXT_STYLES.sm}`}>
                <p>{subtitle1}</p>
                <p>{subtitle2}</p>
                {children}
            </div>
        </div>
    )
}

export default ContactCard