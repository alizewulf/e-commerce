import type { ReactNode } from "react";
import InputModule from "../../base/input/Inputs";
type UserAccountProps = {
    title?: string,
    children?: ReactNode,
    placeholder: string
}

function UserAccountInput({title, children, placeholder}:UserAccountProps) {
    return (
        <div className="flex flex-col gap-2">
            <span>{title}</span>
                <div className="flex flex-col gap-4">
                    <InputModule placeholder={placeholder} className="placeholder:capitalize" variant="primary"/>
                    {children}
                </div>
        </div>
    )
}

export default UserAccountInput