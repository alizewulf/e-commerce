type AuthInput = Partial<{
    type: string,
    placeholder: string,
}>

function AuthInput({type, placeholder}:AuthInput) {
    return (
        <div className="border-b border-b-black">
            <input type={type} placeholder={placeholder} className="w-full"/>
        </div>
    )
}

export default AuthInput