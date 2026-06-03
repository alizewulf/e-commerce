import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import PrimaryButton from "../base/button/ButtonPrimary";
import AuthInput from "../base/input/Input";
import AuthLayout from "../components/layout/auth/Auth";
import { AUTH_API } from "../services/AuthAPI";
import type { StateProps } from "../interfaces/interface";
import { registerTranslation } from "../utils/translations/registerPage";
function SignUpPage({ state }: StateProps) {
  const t = registerTranslation[state.lang as keyof typeof registerTranslation];
  const navigate = useNavigate();

 const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

 const handleRegister = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!username || !email || !password) {
    setError("Fill all fields");
    return;
  }

  const newUser = {
    username,
    email,
    password,
    isAdmin: false,
    id: Date.now().toString(),
  };

  await AUTH_API.register(newUser);

  navigate("/login");
};
  return (
    <AuthLayout h2={t.signupTitle} p={t.signupSubtitle}>
      <form className="flex flex-col gap-10" onSubmit={handleRegister}>
      <AuthInput
        type="text"
        placeholder={t.namePlaceholder}
        value={username}
        onChange={setUsername}
      />

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
    <div className="flex flex-col gap-8.5">
      <PrimaryButton type="submit">
        {t.createAccountButton}
      </PrimaryButton>
      <div className="flex w-full items-center justify-around">
      <span>{t.alreadyHaveAccount}</span>
      <NavLink to="/login"><button className="underline cursor-pointer">{t.loginLink}</button></NavLink>
      </div>
    </div>
    </form>
    </AuthLayout>
  );
}

export default SignUpPage;