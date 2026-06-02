import AuthLayout from "../components/layout/auth/Auth";
import PrimaryButton from "../ui/button/ButtonPrimary";
import AuthInput from "../ui/input/Input";

function LoginPage() {
    return (
        <AuthLayout h2="Log in to Exclusive" p="Enter your details below">
            <AuthInput placeholder="Email or Phone Number" type="email"/>
            <AuthInput placeholder="Password" type="password"/>
            <div className="flex justify-between items-center">
                <PrimaryButton children="Log In"/>
                <button disabled className="font-poppins text-base leading-6 my-auto text-secondary-2">Forget password?</button>
            </div>
        </AuthLayout>
    )
}

export default LoginPage