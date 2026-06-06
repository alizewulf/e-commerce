interface ArrowSVGProps {
    onClick?: React.MouseEventHandler<SVGSVGElement>,
    className?: string,
    fill?: string,
}

function ArrowSVG({onClick, className, fill="white"}:ArrowSVGProps) {
    return (
        <svg className={className} onClick={onClick} width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.36403 4.95L11.314 0L12.728 1.414L6.36403 7.778L2.67029e-05 1.414L1.41403 0L6.36403 4.95Z" fill={fill}/>
        </svg>
    )
}

export default ArrowSVG