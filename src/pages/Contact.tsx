import PrimaryButton from "../base/button/ButtonPrimary"
import InputModule from "../base/input/Inputs"
import { TITLE_TEXT_STYLES } from "../shared/styles/textVariables"
import ContactCard from "../ui/cards/ContactCard"
import MailSVG from "../ui/icons/Mail"
import PhoneSVG from "../ui/icons/Phone"

function ContactPage() {

    return (
            <section className="mt-20 px-33.75 flex flex-col gap-20">
                <p className={`${TITLE_TEXT_STYLES.sm} text-black/50`}>Home / <span className="text-black">Contact</span></p>
                <div className="flex flex-row justify-around">

                    <div className="flex flex-col gap-10 w-85">
                    <ContactCard img={<PhoneSVG/>} heading="Call To Us" subtitle1="We are available 24/7, 7 days a week." subtitle2="Phone: +8801611112222" container="border-b border-black pb-8"/>
                    <ContactCard img={<MailSVG/>} heading="Write To US" subtitle1="Fill out our form and we will contact you within 24 hours." subtitle2="Emails: customer@exclusive.com" children={<p>Emails: support@exclusive.com</p>}/>
                    </div>

                    <div className="flex flex-col gap-8 px-8 py-10">
                    
                        <div className="flex flex-row gap-4">
                            <InputModule variant="primary" required={true} placeholder="Your Name" type="text" />
                            <InputModule variant="primary" required={true} placeholder="Your Email" type="email"/>
                            <InputModule variant="primary" required={true} placeholder="Your Phone" type="number"/>
                        </div>
                    
                        <InputModule variant="secondary"  as="textarea" placeholder="Your Email" type="email"/>
                        <div className="flex justify-end">
                            <PrimaryButton className="text-center">Send Massage</PrimaryButton>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default ContactPage