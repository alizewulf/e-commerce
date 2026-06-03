import type { ReactNode } from "react"
type CardProps = {
    children: ReactNode,
    amount: string,
    text: string
    textColor?: string,
    bgColor?: string,
    borderColor?: string,
    containerColor?: string,
}
const childrenStyle:string = "bg-black p-4 rounded-full outline-15 outline-black/20"

function Card({children="place SVG to children", containerColor, bgColor="bg-black", textColor="black", amount="Amount is empty", borderColor="black", text="text props is empty"}:CardProps) {
    return (
        <div className={` flex flex-col items-center ${containerColor} gap-5 justify-center py-7.5 px-12.5 rounded-sm border border-${borderColor}/30`}>
          <div className={`${childrenStyle} ${bgColor}`}>
            {children}
          </div>
          <div className={`flex flex-col gap-2 items-center text-${textColor}`}>
            <span className="font-bold font-inter leading-7.5 tracking-[4px] text-3xl">{amount}</span>
            <span className="text-base font-poppins leading-6">{text}</span>
          </div>
        </div>
    )
}

export default Card