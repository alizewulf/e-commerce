import PrimaryButton from "../base/button/ButtonPrimary"
import UserAccountInput from "../components/layout/ManageAccount/UserAccountInput"
import UserPanel from "../components/layout/ManageAccount/UserPanel"
import { TITLE_TEXT_STYLES } from "../shared/styles/textVariables"

function ManageMyAccount() {
    const getUser = JSON.parse(localStorage.getItem("user") || (""))
    return (
        <section className="py-20 gap-20 px-33.75 flex flex-col">
            <div className="flex justify-between">
                <span className={`${TITLE_TEXT_STYLES.sm} text-black/50`}>Home / <span className="text-black">My Account</span></span>
                <p className={`capitalize ${TITLE_TEXT_STYLES.sm}`}>Welcome! <span className="text-secondary-2">{getUser.firstname} {getUser.lastname}</span></p>
            </div>
        <div className="flex gap-25">
            <div className="flex flex-col gap-6">
                <UserPanel title="Manage My Account">
                    <span className="text-secondary-2">My Profile</span>
                    <span>Address Book</span>
                    <span>My Payment Options</span>
                </UserPanel>
                <UserPanel title="My Orders">
                    <span>My Returns</span>
                    <span>My Cancellations</span>
                </UserPanel>
                <UserPanel title="My Wishlist"/>
            </div>
            <div className="flex flex-col py-10 w-full gap-4.5 px-20 bg-primary">
                <p className={`text-secondary-2 ${TITLE_TEXT_STYLES.xl}`}>Edit Your Profile</p>
                <div className="flex justify-between">
                    <UserAccountInput placeholder={getUser.firstname} title="First Name"/>
                    <UserAccountInput placeholder={getUser.lastname} title="Last Name"/>
                </div>
                <div className="flex justify-between">
                    <UserAccountInput placeholder={getUser.email} title="Email"/>
                    <UserAccountInput placeholder={getUser.address} title="Address"/>
                </div>
                <div className="flex flex-col">
                    <UserAccountInput placeholder="Current Password" title="Password"/>
                    <UserAccountInput placeholder="New Password"/>
                    <UserAccountInput placeholder="Confirm New Password"/>
                </div>
                <div className="flex justify-end items-center gap-8">
                    <button>Cancel</button>
                    <PrimaryButton>Save&nbsp;Changes</PrimaryButton>
                </div>
            </div>
        </div>
        </section>
    )
}

export default ManageMyAccount