import type { ReactNode } from 'react'
import SideImage from '/Side Image.png'

type AuthLayoutProps = {
    children: ReactNode,
    h2: string,
    p: string,
}

function AuthLayout({children, h2, p}:AuthLayoutProps) {
    return (
        <div className="justify-around flex gap-32.5 mt-15">
            <img src={SideImage} alt="Side Image"/>
            <div className="flex flex-col gap-6 mt-31.25">
                <h2 className="font-inter text-4xl leading-7.5 tracking-[4%]">{h2}</h2>
                <p className="font-poppins text-base leading-6">{p}</p>
                <div className="flex flex-col gap-10">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AuthLayout