import type { ReactNode } from "react";
import InputModule from "../../base/input/Inputs";
type UserAccountProps = {
    title?: string,
    children?: ReactNode,
    placeholder: string
    name?: string
    type?: "text" | "email" | "password" | "number"
    value?: string
    onChange?: (value: string) => void
    required?: boolean
}

function UserAccountInput({
    title,
    children,
    placeholder,
    name,
    type = "text",
    value,
    onChange,
    required = false,
}: UserAccountProps) {
    return (
        <div className="flex flex-col gap-2">
            <span>{title}</span>
            <div className="flex flex-col gap-4">
                <InputModule
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={required}
                    className="placeholder:capitalize"
                    variant="primary"
                />
                {children}
            </div>
        </div>
    )
}

export default UserAccountInput