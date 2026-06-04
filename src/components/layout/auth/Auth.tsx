import type { ReactNode } from 'react'
import SideImage from '/Side Image.png'
import { HEADING_TEXT_STYLES, TITLE_TEXT_STYLES } from '../../../shared/styles/textVariables'

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
                <h2 className={HEADING_TEXT_STYLES.md}>{h2}</h2>
                <p className={TITLE_TEXT_STYLES.md}>{p}</p>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AuthLayout