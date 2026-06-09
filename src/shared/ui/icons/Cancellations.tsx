import type { PropsSVG } from "../../../interfaces/interface";

function CancelSVG({ className }: PropsSVG) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 16L12 12M16 8L11.9992 12M11.9992 12L8 8M12 12L16 16" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="12" cy="12" r="11.25" stroke="white" stroke-width="1.5"/>
    </svg>
  );
}

export default CancelSVG;