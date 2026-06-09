import type { PropsSVG } from "../../../interfaces/interface";
function OrdersSVG({className, color}:PropsSVG) {
  return (
    <svg
      width="20"
      height="21"
      className={className}
      viewBox="0 0 20 21"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.75 4.55V18.75C0.75 19.0152 0.855357 19.2696 1.04289 19.4571C1.23043 19.6446 1.48478 19.75 1.75 19.75H17.75C18.0152 19.75 18.2696 19.6446 18.4571 19.4571C18.6446 19.2696 18.75 19.0152 18.75 18.75V4.55H0.75Z"
        stroke="#FAFAFA"
        stroke-width="1.5"
        stroke-linejoin="round"
      />
      <path
        d="M18.75 4.55L15.9165 0.75H3.5835L0.75 4.55M13.5275 7.85C13.5275 9.949 11.8365 11.65 9.75 11.65C7.6635 11.65 5.972 9.949 5.972 7.85"
        stroke="#FAFAFA"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default OrdersSVG;
