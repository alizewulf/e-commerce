import { NavLink } from "react-router-dom";
import PrimaryButton from "../base/button/ButtonPrimary";
import GoogleAuthButton from "../base/button/GoogleAuth";
import AuthInput from "../base/input/Input";
import AuthLayout from "../components/layout/auth/Auth";
import type { StateProps } from "../interfaces/interface";
import { translations } from "../utils/translations";

function SignUpPage({state}:StateProps) {
    const t = translations[state.lang as keyof typeof translations];
  
  return (
    <AuthLayout h2={t.signupTitle} p={t.signupTitle}>
      <AuthInput type="text" placeholder={t.namePlaceholder} required={true}/>
      <AuthInput type="email" placeholder={t.emailPlaceholder} required={true}/>
      <AuthInput type="password" placeholder={t.passwordPlaceholder} required={true}/>
      <NavLink to={"/login"}>
        <PrimaryButton className="w-full">
          {t.createAccountButton}
        </PrimaryButton>
      </NavLink>
      <GoogleAuthButton children={t.signUpWithGoogle}/>
      <div className="flex flex-row gap-4 items-center justify-center">
        <span className="text-black/40 font-base font-poppins leading-6">
          {t.alreadyHaveAccount}
        </span>
        <NavLink to={"/login"}>
          <button className="font-base font-poppins leading-6 underline cursor-pointer">
            {t.loginLink}
          </button>
        </NavLink>
      </div>
    </AuthLayout>
  );
}

export default SignUpPage;
