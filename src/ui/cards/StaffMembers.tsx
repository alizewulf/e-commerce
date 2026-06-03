import InstagramSVG from '../icons/Instagram'
import LinkedInSVG from '../icons/LinkedIn'
import TwitterSVG from '../icons/Twitter'
type MemberRole = "Founder & Chairman" | "Managing Director" | "Product Designer" | null
type StaffCard = {
    staffImg: string,
    memberName: string,
    memberPosition: MemberRole
}
function StaffCard({staffImg, memberName="Member Name is empty", memberPosition=null}:StaffCard) {
    return (
        <div className="flex gap-8 flex-col">
            <img src={staffImg} alt="Staff member"/>
            <div className="flex flex-col gap-2">
                <span className="font-inter text-xl tracking-[4%] leading-7.5">{memberName}</span>
                <span className="text-base font-poppins leading-6">{memberPosition}</span>
            </div>
            <div className="flex gap-4 flex-row items-center">
                <a href="#"><TwitterSVG/></a>
                <a href="#"><InstagramSVG/></a>
                <a href="#"><LinkedInSVG color2="black"/></a>
            </div>
        </div>
    )
}

export default StaffCard