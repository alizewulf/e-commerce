import { HEADING_TEXT_STYLES, TITLE_TEXT_STYLES } from '../../styles/textVariables'
import InstagramSVG from '../icons/Instagram'
import LinkedInSVG from '../icons/LinkedIn'
import TwitterSVG from '../icons/Twitter'
type StaffCard = {
    staffImg: string,
    memberName: string,
    memberPosition: string
}
function StaffCard({staffImg, memberName="Member Name is empty", memberPosition="member position is empty"}:StaffCard) {
    return (
        <div className="flex gap-8 flex-col">
            <img src={staffImg} alt="Staff member"/>
            <div className="flex flex-col gap-2">
                <span className={HEADING_TEXT_STYLES.sm}>{memberName}</span>
                <span className={TITLE_TEXT_STYLES.md}>{memberPosition}</span>
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