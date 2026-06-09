import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import PrimaryButton from "../base/button/ButtonPrimary";
import AuthLayout from "../components/layout/auth/Auth";
import { AUTH_API } from "../services/auth/AuthAPI";
import type { StateProps } from "../interfaces/app/state";
import { registerTranslation } from "../utils/translations/registerPage";
import InputModule from "../base/input/Inputs";
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
    <AuthLayout h2={t.content.signupTitle} p={t.content.signupSubtitle}>
      <form className="flex flex-col gap-10" onSubmit={handleRegister}>
        <InputModule type="text" variant="auth" as="input" required={true} placeholder={t.content.namePlaceholder} value={username} onChange={setUsername}/>
        <InputModule type="email" variant="auth" as="input" required={true} placeholder={t.content.emailPlaceholder} value={email} onChange={setEmail}/>
        <InputModule type="password" variant="auth" as="input" required={true} placeholder={t.content.passwordPlaceholder} value={password} onChange={setPassword}/>
      
      {error && <p>{error}</p>}
    <div className="flex flex-col gap-8.5">
      <PrimaryButton type="submit">
        {t.actions.createAccountButton}
      </PrimaryButton>
      <div className="flex w-full items-center justify-around">
      <span>{t.content.alreadyHaveAccount}</span>
      <NavLink to="/login"><button className="underline cursor-pointer">{t.content.loginLink}</button></NavLink>
      </div>
    </div>
    </form>
    </AuthLayout>
  );
}

export default SignUpPage;