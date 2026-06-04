import AuthLayout from "../components/layout/auth/Auth";
import PrimaryButton from "../base/button/ButtonPrimary";
import type { StateProps } from "../interfaces/interface";
import { useState } from "react";
import { AUTH_API } from "../services/AuthAPI";
import { useNavigate } from "react-router-dom";
import { loginTranslations } from "../utils/translations/loginPage";
import { TITLE_TEXT_STYLES } from "../shared/styles/textVariables";
import InputModule from "../base/input/Inputs";

function LoginPage({ state, setState }: StateProps) {
  const t = loginTranslations[state.lang as keyof typeof loginTranslations];
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const user = await AUTH_API.login(email, password);

    if (!user) {
      setError("Wrong email or password");
      return;
    }
    if (!setState) {
      return
    }
    setState(prev => ({
        ...prev,
        isAuth: true,
        user
    }))
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/")
    };
  return (
    <AuthLayout h2={t.loginTitle} p={t.loginSubtitle}>
      <form onSubmit={handleLogin} className="flex flex-col gap-10">

        <InputModule type="email" variant="auth" as="input" required={true} placeholder={t.emailPlaceholder} value={email} onChange={setEmail}/>
        <InputModule type="password" variant="auth" as="input" required={true} placeholder={t.passwordPlaceholder} value={password} onChange={setPassword}/>
        {error && <p>{error}</p>}

      
      <div className="flex justify-between items-center">
        <PrimaryButton type="submit" children={t.loginButton} />
    
        <button
          disabled
          className={`${TITLE_TEXT_STYLES.md} my-auto text-secondary-2`}
        >
          {t.forgotPassword}
        </button>
      </div>
      </form>
    </AuthLayout>
  );
}

export default LoginPage;
