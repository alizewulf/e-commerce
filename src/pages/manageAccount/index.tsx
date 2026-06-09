import PrimaryButton from "../../base/button/ButtonPrimary"
import UserAccountInput from "./UserAccountInput"
import UserPanel from "./UserPanel"
import { TITLE_TEXT_STYLES } from "../../shared/styles/textVariables"
import type { StateProps } from "../../interfaces/app/state"
import { manageAccountTranslations } from "../../utils/translations/manageAccount"

function ManageMyAccount({ state }: StateProps) {
  const t = manageAccountTranslations[state.lang as keyof typeof manageAccountTranslations];
  const getUser = JSON.parse(localStorage.getItem("user") || "null") || {
    firstname: "",
    lastname: "",
    email: "",
    address: "",
  }

  return (
    <section className="py-20 gap-20 px-33.75 flex flex-col">
      <div className="flex justify-between">
        <span className={`${TITLE_TEXT_STYLES.sm} text-black/50`}>
          Home / <span className="text-black">My Account</span>
        </span>
        <p className={`capitalize ${TITLE_TEXT_STYLES.sm}`}>
          {t.welcome} <span className="text-secondary-2">{getUser.firstname} {getUser.lastname}</span>
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
          <div className="flex justify-between">
            <UserAccountInput placeholder={getUser.firstname} title={t.firstName} />
            <UserAccountInput placeholder={getUser.lastname} title={t.lastName} />
          </div>
          <div className="flex justify-between">
            <UserAccountInput placeholder={getUser.email} title={t.email} />
            <UserAccountInput placeholder={getUser.address} title={t.address} />
          </div>
          <div className="flex flex-col">
            <UserAccountInput placeholder={t.currentPassword} title={t.password} />
            <UserAccountInput placeholder={t.newPassword} />
            <UserAccountInput placeholder={t.confirmNewPassword} />
          </div>
          <div className="flex justify-end items-center gap-8">
            <button>{t.cancel}</button>
            <PrimaryButton>{t.saveChanges}</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ManageMyAccount