import { NavLink } from "react-router-dom";
import PrimaryButton from "../ui/button/ButtonPrimary";
import GoogleAuthButton from "../ui/button/GoogleAuth";
import AuthInput from "../ui/input/Input";
import AuthLayout from "../components/layout/auth/Auth";

function SignUpPage() {
  return (
    <AuthLayout h2="Create an account" p="Enter your details below">
      <AuthInput type="text" placeholder="name" />
      <AuthInput type="email" placeholder="Email or Number" />
      <AuthInput type="password" placeholder="Password" />
      <PrimaryButton children="Create Account" />
      <GoogleAuthButton />
      <div className="flex flex-row gap-4 items-center justify-center">
        <span className="text-black/40 font-base font-poppins leading-6">
          Already have account?
        </span>
        <NavLink to={"/login"}>
          <button className="font-base font-poppins leading-6 underline cursor-pointer">
            Log In
          </button>
        </NavLink>
      </div>
    </AuthLayout>
  );
}

export default SignUpPage;
