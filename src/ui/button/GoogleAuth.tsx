import GoogleSVG from "../icons/Google"
function GoogleAuthButton() {
    return (
        <button disabled className="border font-poppins text-base leading-6 py-4 flex gap-4 cursor-pointer justify-center border-black/40">
            <GoogleSVG/> Sign up with Google
        </button>
    )
}

export default GoogleAuthButton