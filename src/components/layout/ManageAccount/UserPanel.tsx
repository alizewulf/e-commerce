import type { ReactNode } from "react"
import { TITLE_TEXT_STYLES } from "../../../shared/styles/textVariables"

type UserPanelProps = {
    title: string,
    children?: ReactNode
}

function UserPanel({title, children}:UserPanelProps) {
    return (
        <div className="flex flex-col gap-4">
            <p className={TITLE_TEXT_STYLES.md}>{title}</p>
            <div className={`px-8.75 ${TITLE_TEXT_STYLES.md} text-black/50 flex flex-col gap-2`}>
                {children}
            </div>
        </div>
    )
}

export default UserPanel