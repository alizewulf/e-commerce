import type { PropsSVG } from "../../../interfaces/interface";
function LogoutSVG({className, color}:PropsSVG) {
  return (
    <svg
      width="19"
      height="18"
      className={className}
      viewBox="0 0 19 18"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.75 8.75H11.25M3.75 11.75L0.75 8.75L3.75 5.75M8.75 3.75V2.75C8.75 2.21957 8.96071 1.71086 9.33579 1.33579C9.71086 0.960714 10.2196 0.75 10.75 0.75H15.75C16.2804 0.75 16.7891 0.960714 17.1642 1.33579C17.5393 1.71086 17.75 2.21957 17.75 2.75V14.75C17.75 15.2804 17.5393 15.7891 17.1642 16.1642C16.7891 16.5393 16.2804 16.75 15.75 16.75H10.75C10.2196 16.75 9.71086 16.5393 9.33579 16.1642C8.96071 15.7891 8.75 15.2804 8.75 14.75V13.75"
        stroke="#FAFAFA"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default LogoutSVG;
