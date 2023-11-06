import { ReactNode, useState } from "react";
import { Tooltip } from "react-daisyui";

export default function CopyTootrip({
    children,
    copyText,
    className,
}: {
    children: ReactNode;
    copyText: string;
    className?: string;
}) {
    const defaultMsg = "クリックしてコピー";
    const [tooltipMsg, setTooltipMsg] = useState(defaultMsg);

    const handleClick = (/*e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>*/) => {
        navigator.clipboard.writeText(copyText);
        setTooltipMsg("コピーしました");
    };

    const handleMouseOut = () => {
        setTooltipMsg(defaultMsg);
    };

    const handleMouseOver = (/*e: React.MouseEvent<HTMLDivElement, MouseEvent>*/) => {
        setTimeout(() => {
            setTooltipMsg(defaultMsg);
        }, 2000);
    };

    return (
        <>
            <Tooltip
                message={tooltipMsg}
                onClick={handleClick}
                onMouseOut={handleMouseOut}
                onMouseOver={handleMouseOver}
                className={className}
            >
                {children}
            </Tooltip>
        </>
    );
}
