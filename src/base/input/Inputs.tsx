import { TITLE_TEXT_STYLES } from "../../shared/styles/textVariables"

type InputVariants = "primary" | "secondary" | "auth"
type InputElement = "input" | "textarea"
type InputTypes = "number" | "email" | "text" | "password"

const variants: Record<InputVariants, string> = {
    primary: "py-[13px] pl-[16px] w-[235px] bg-secondary appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
    secondary: "w-full pl-[16px] pt-[13px] h-[200px] bg-secondary resize-none align-top",
    auth: "w-full outline-0 border-b border-b-black"
}

interface InputProps {
    variant: InputVariants
    as?: InputElement
    type?: InputTypes
    placeholder: string
    required?: boolean
    value?: string
    onChange?: (value: string) => void
}

function InputModule({
    variant,
    as,
    type = "text",
    placeholder,
    required,
    value,
    onChange
}: InputProps) {

    const className = `${variants[variant]} ${TITLE_TEXT_STYLES.md} placeholder:opacity-50`

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        onChange?.(e.target.value)
    }

    if (as === "textarea") {
        return (
            <textarea
                className={className}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                required={required}
            />
        )
    }

    return (
        <input
            type={type}
            className={className}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            required={required}
        />
    )
}

export default InputModule