import AuthLayout from "../components/layout/auth/Auth";
import PrimaryButton from "../base/button/ButtonPrimary";
import AuthInput from "../base/input/Input";
import type { StateProps } from "../interfaces/interface";
import { translations } from "../utils/translations";

function LoginPage({state}:StateProps) {
    const t = translations[state.lang as keyof typeof translations];

    return (
        <AuthLayout h2={t.loginTitle} p={t.loginSubtitle}>
            <AuthInput placeholder={t.emailPlaceholder} type="email" required={true}/>
            <AuthInput placeholder={t.passwordPlaceholder} type="password" required={true}/>
            <div className="flex justify-between items-center">
                <PrimaryButton children={t.loginButton}/>
                <button disabled className="font-poppins text-base leading-6 my-auto text-secondary-2">{t.forgotPassword}</button>
            </div>
        </AuthLayout>
    )
}

export default LoginPage