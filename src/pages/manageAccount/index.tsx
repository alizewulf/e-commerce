import { useState } from "react";
import PrimaryButton from "../../base/button/ButtonPrimary";
import UserAccountInput from "./UserAccountInput";
import UserPanel from "./UserPanel";
import { TITLE_TEXT_STYLES } from "../../shared/styles/textVariables";
import type { StateProps } from "../../interfaces/app/state";
import { manageAccountTranslations } from "../../utils/translations/manageAccount";
import { USERS } from "../../services/auth/getUsers";
import type { User } from "../../interfaces/domain/user";

function ManageMyAccount({ state }: StateProps) {
  const t = manageAccountTranslations[state.lang as keyof typeof manageAccountTranslations];
  const storedUser = JSON.parse(localStorage.getItem("user") || "null") as User | null;
  const initialUser = storedUser ?? {
    id: "",
    username: "",
    email: "",
    password: "",
    isAdmin: false,
    firstname: "",
    lastname: "",
    address: "",
  };

  const [firstName, setFirstName] = useState(initialUser.firstname ?? "");
  const [lastName, setLastName] = useState(initialUser.lastname ?? "");
  const [email, setEmail] = useState(initialUser.email ?? "");
  const [address, setAddress] = useState(initialUser.address ?? "");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const handleReset = () => {
    setFirstName(initialUser.firstname ?? "");
    setLastName(initialUser.lastname ?? "");
    setEmail(initialUser.email ?? "");
    setAddress(initialUser.address ?? "");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmNewPassword("");
    setError(null);
    setMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setMessage(null);

    const trimmedFirstName = firstName.trim();
    const trimmedLastName = lastName.trim();
    const trimmedEmail = email.trim();
    const trimmedAddress = address.trim();

    if (
      !trimmedFirstName ||
      !trimmedLastName ||
      !trimmedEmail ||
      !trimmedAddress
    ) {
      setError(t.validationRequired);
      return;
    }

    if (newPassword || confirmNewPassword || currentPassword) {
      if (!currentPassword) {
        setError(t.currentPasswordRequired);
        return;
      }

      if (currentPassword !== initialUser.password) {
        setError(t.currentPasswordIncorrect);
        return;
      }

      if (!newPassword || !confirmNewPassword) {
        setError(t.passwordFieldsRequired);
        return;
      }

      if (newPassword !== confirmNewPassword) {
        setError(t.passwordsMustMatch);
        return;
      }
    }

    if (!initialUser.id) {
      setError(t.noUserFound);
      return;
    }

    const updatedUser: Partial<User> = {
      firstname: trimmedFirstName,
      lastname: trimmedLastName,
      email: trimmedEmail,
      address: trimmedAddress,
    };

    if (newPassword) {
      updatedUser.password = newPassword;
    }

    try {
      setIsSaving(true);
      const result = await USERS.update(initialUser.id, updatedUser);
      const savedUser = {
        ...initialUser,
        ...result,
      };
      localStorage.setItem("user", JSON.stringify(savedUser));
      setMessage(t.updateSuccess);
      setCurrentPassword("");
      setNewPassword("");
      setConfirmNewPassword("");
    } catch {
      setError(t.updateError);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <section className="py-20 gap-20 px-33.75 flex flex-col">
      <div className="flex justify-between">
        <span className={`${TITLE_TEXT_STYLES.sm} text-black/50`}>
          Home / <span className="text-black">My Account</span>
        </span>
        <p className={`capitalize ${TITLE_TEXT_STYLES.sm}`}>
          {t.welcome} <span className="text-secondary-2">{initialUser.firstname} {initialUser.lastname}</span>
        </p>
      </div>
      <div className="flex gap-25">
        <div className="flex flex-col gap-6">
          <UserPanel title={t.manageAccountTitle}>
            <span className="text-secondary-2">{t.myProfile}</span>
            <span>{t.addressBook}</span>
            <span>{t.paymentOptions}</span>
          </UserPanel>
          <UserPanel title={t.myOrders}>
            <span>{t.myReturns}</span>
            <span>{t.myCancellations}</span>
          </UserPanel>
          <UserPanel title={t.myWishlist} />
        </div>
        <div className="flex flex-col py-10 w-full gap-4.5 px-20 bg-primary">
          <p className={`text-secondary-2 ${TITLE_TEXT_STYLES.xl}`}>{t.editProfileTitle}</p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4.5">
            <div className="flex justify-between">
              <UserAccountInput
                placeholder={t.firstName}
                name="firstName"
                title={t.firstName}
                value={firstName}
                onChange={setFirstName}
                required
              />
              <UserAccountInput
                placeholder={t.lastName}
                name="lastName"
                title={t.lastName}
                value={lastName}
                onChange={setLastName}
                required
              />
            </div>
            <div className="flex justify-between">
              <UserAccountInput
                placeholder={t.email}
                name="email"
                title={t.email}
                type="email"
                value={email}
                onChange={setEmail}
                required
              />
              <UserAccountInput
                placeholder={t.address}
                name="address"
                title={t.address}
                value={address}
                onChange={setAddress}
                required
              />
            </div>
            <div className="flex flex-col">
              <UserAccountInput
                placeholder={t.currentPassword}
                name="currentPassword"
                title={t.password}
                type="password"
                value={currentPassword}
                onChange={setCurrentPassword}
              />
              <UserAccountInput
                placeholder={t.newPassword}
                name="newPassword"
                type="password"
                value={newPassword}
                onChange={setNewPassword}
              />
              <UserAccountInput
                placeholder={t.confirmNewPassword}
                name="confirmNewPassword"
                type="password"
                value={confirmNewPassword}
                onChange={setConfirmNewPassword}
              />
            </div>
            {error && <p className="text-red-600">{error}</p>}
            {message && <p className="text-green-600">{message}</p>}
            <div className="flex justify-end items-center gap-8">
              <button type="button" onClick={handleReset} className="opacity-80 hover:opacity-100">
                {t.cancel}
              </button>
              <PrimaryButton type="submit" disabled={isSaving}>
                {isSaving ? t.savingChanges : t.saveChanges}
              </PrimaryButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ManageMyAccount
