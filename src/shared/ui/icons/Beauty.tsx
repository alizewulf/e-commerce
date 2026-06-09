function BeautySVG() {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(38,50)">
        <rect
          x="-4"
          y="18"
          width="8"
          height="18"
          rx="3"
          fill="none"
          stroke="#555"
          strokeWidth="1.5"
        />
        <ellipse
          cx="0"
          cy="4"
          rx="22"
          ry="26"
          fill="none"
          stroke="#222"
          strokeWidth="2"
        />
        <ellipse
          cx="-7"
          cy="-4"
          rx="6"
          ry="9"
          fill="none"
          stroke="#999"
          strokeWidth="1"
          opacity="0.5"
        />
        <rect
          x="28"
          y="-4"
          width="10"
          height="18"
          rx="2"
          fill="none"
          stroke="#222"
          strokeWidth="1.5"
        />
        <rect
          x="28"
          y="-10"
          width="10"
          height="8"
          rx="3"
          fill="none"
          stroke="#555"
          strokeWidth="1.5"
        />
        <line x1="28" y1="-4" x2="38" y2="-4" stroke="#222" strokeWidth="1" />
      </g>
    </svg>
  );
}
export default BeautySVG