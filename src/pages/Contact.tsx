import { useEffect, useState } from "react"
import PrimaryButton from "../base/button/ButtonPrimary"
import InputModule from "../base/input/Inputs"
import type { StateProps } from "../interfaces/interface"
import { TITLE_TEXT_STYLES } from "../shared/styles/textVariables"
import ContactCard from "../ui/cards/ContactCard"
import MailSVG from "../ui/icons/Mail"
import PhoneSVG from "../ui/icons/Phone"
import { contactPageTranslation } from "../utils/translations/contactPage"

function ContactPage({state}:StateProps) {
    const t = contactPageTranslation[state.lang as keyof typeof contactPageTranslation]
    const [showNotification, setShowNotification] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")

    useEffect(() => {
        if (!showNotification) return

        const timer = window.setTimeout(() => {
            setShowNotification(false)
        }, 1250)

        return () => window.clearTimeout(timer)
    }, [showNotification])

    const handleSendClick = () => {
        if (!name.trim() || !email.trim() || !phone.trim() || !message.trim()) {
            return
        }

        setShowNotification(true)
    }

    return (
        <section className="mt-20 px-33.75 flex flex-col gap-20">
            <p className={`${TITLE_TEXT_STYLES.sm} text-black/50`}>Home / <span className="text-black">Contact</span></p>
            <div className="flex flex-row justify-around">

                <div className="flex flex-col gap-10 w-85">
                    <ContactCard img={<PhoneSVG/>} heading={t.content.callToUs} subtitle1={t.content.availability} subtitle2={`${t.content.phone}: +8801611112222`} container="border-b border-black pb-8"/>
                    <ContactCard img={<MailSVG/>} heading={t.content.writeToUs} subtitle1={t.content.contactForm} subtitle2={`${t.content.customerEmail}: customer@exclusive.com`} children={<p>{t.content.supportEmail}: support@exclusive.com</p>}/>
                </div>

                <div className="flex flex-col gap-8 px-8 py-10">
                    <div className="flex flex-row gap-4">
                        <label className="relative flex flex-col gap-2">
                            {!name && (
                                <span className="pointer-events-none flex gap-2 absolute left-4 top-1/2 -translate-y-1/2 text-black/40">
                                    <span>{t.content.yourName}</span>
                                    <span className="text-red-500">*</span>
                                </span>
                            )}
                            <InputModule
                                variant="primary"
                                required={true}
                                placeholder=""
                                type="text"
                                value={name}
                                onChange={setName}
                                className="placeholder:text-transparent"
                            />
                        </label>
                        <label className="relative flex flex-col gap-2">
                            {!email && (
                                <span className="pointer-events-none flex gap-2 absolute left-4 top-1/2 -translate-y-1/2 text-black/40">
                                    <span>{t.content.yourEmail}</span>
                                    <span className="text-red-500">*</span>
                                </span>
                            )}
                            <InputModule
                                variant="primary"
                                required={true}
                                placeholder=""
                                type="email"
                                value={email}
                                onChange={setEmail}
                                className="placeholder:text-transparent"
                            />
                        </label>
                        <label className="relative flex flex-col gap-2">
                            {!phone && (
                                <span className="pointer-events-none flex gap-2 absolute left-4 top-1/2 -translate-y-1/2 text-black/40">
                                    <span>{t.content.yourPhone}</span>
                                    <span className="text-red-500">*</span>
                                </span>
                            )}
                            <InputModule
                                variant="primary"
                                required={true}
                                placeholder=""
                                type="number"
                                value={phone}
                                onChange={setPhone}
                                className="placeholder:text-transparent"
                            />
                        </label>
                    </div>

                    <label className="relative flex flex-col gap-2">
                        {!message && (
                            <span className="pointer-events-none flex gap-2 absolute left-4 top-4 text-black/40">
                                <span>{t.content.message}</span>
                                <span className="text-red-500">*</span>
                            </span>
                        )}
                        <InputModule
                            variant="secondary"
                            as="textarea"
                            required={true}
                            placeholder=""
                            type="email"
                            value={message}
                            onChange={setMessage}
                            className="placeholder:text-transparent"
                        />
                    </label>

                    <div className="flex justify-end">
                        <PrimaryButton className="text-center" onClick={handleSendClick}>
                            Send Massage
                        </PrimaryButton>
                    </div>
                </div>
            </div>

            {showNotification && (
                <div className={`fixed bottom-6 right-6 z-50 rounded-xl bg-secondary-2/90 px-4 py-3 text-white shadow-lg ${TITLE_TEXT_STYLES.md}`}>
                    {t.content.messageSent}
                </div>
            )}
        </section>
    )
}

export default ContactPage

