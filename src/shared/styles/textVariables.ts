export const TITLE_TEXT_STYLES = {
  /** 12px / 18px */
  xs: "text-xs leading-[18px] font-poppins",

  /** 14px / 21px */
  sm: "text-sm leading-5.25 font-poppins",

  /** 16px / 24px */
  md: "text-base leading-6 font-poppins",

  /** 20px / 24px */
  xl: "text-xl leading-6 font-poppins",

  /** 24px / 26px */
  xxl: "text-2xl leading-[26px] font-poppins",
} as const;

export const HEADING_TEXT_STYLES = {
    /** 20px / 20px */
    xxs: "font-inter leading-5 tracking-[3%] text-xl",
    /** 24px / 24px */
    xs: "font-inter tracking-[3%] leading-6 text-2xl",
    /** 32px / 30px */
    sm: "font-inter tracking-[4%] leading-[30px] text-[32px]",
    /** 36px /30px */
    md: "text-4xl font-inter tracking-[5%] leading-7.5",
    /** 54 px / 64px */
    xxl: "text-[54px] leading-16 font-inter tracking-[6%]",
    xxxl: "font-inter text-[32px] leading-7.5 tracking-[4%]",

    /** 110px / 115px */
    max: "text-heading font-inter leading-28.75 tracking-[3%]"
} as const