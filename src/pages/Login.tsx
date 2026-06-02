import AuthLayout from "../components/layout/auth/Auth";
import PrimaryButton from "../base/button/ButtonPrimary";
import AuthInput from "../base/input/Input";
import type { StateProps } from "../interfaces/interface";
import { translations } from "../utils/translations";
import { useState } from "react";
import { AUTH_API } from "../services/AuthAPI";
import { useNavigate } from "react-router-dom";

function LoginPage({ state, setState }: StateProps) {
  const t = translations[state.lang as keyof typeof translations];
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
        <AuthInput
          type="email"
          placeholder={t.emailPlaceholder}
          value={email}
          onChange={setEmail}
        />

        <AuthInput
          type="password"
          placeholder={t.passwordPlaceholder}
          value={password}
          onChange={setPassword}
        />

        {error && <p>{error}</p>}

      
      <div className="flex justify-between items-center">
        <PrimaryButton type="submit" children={t.loginButton} />
    
        <button
          disabled
          className="font-poppins text-base leading-6 my-auto text-secondary-2"
        >
          {t.forgotPassword}
        </button>
      </div>
      </form>
    </AuthLayout>
  );
}

export default LoginPage;
