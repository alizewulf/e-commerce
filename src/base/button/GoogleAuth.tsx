import type { ReactNode } from "react"
import GoogleSVG from "../../ui/icons/Google"

type Button = {
    children: ReactNode
}
function GoogleAuthButton({children}:Button) {

    return (
        <button disabled className="border font-poppins text-base leading-6 py-4 flex gap-4 cursor-pointer justify-center border-black/40">
            <GoogleSVG/> {children}
        </button>
    )
}

export default GoogleAuthButton