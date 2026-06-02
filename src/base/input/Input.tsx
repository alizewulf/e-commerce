type AuthInput = Partial<{
    type: string,
    placeholder: string,
    required?: boolean
}>

function AuthInput({type, placeholder, required}:AuthInput) {
    return (
        <div className="border-b border-b-black">
            <input type={type} placeholder={placeholder} className="w-full outline-0" required={required}/>
        </div>
    )
}

export default AuthInput