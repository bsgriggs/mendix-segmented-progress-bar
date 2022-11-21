import { ReactElement, createElement } from "react";

type SummaryItemProps = {
    caption: string;
    value: number;
    summaryValue?: string;
    color?: string;
    onClick?: () => void;
};

const formatValue = (value: number): number => {
    return Math.round(value * 10) / 10;
};

export const SummaryItem = ({ caption, color, value, summaryValue, onClick }: SummaryItemProps): ReactElement => (
    <div className="spb-summary-item" onClick={() => (onClick !== undefined ? onClick() : {})}>
        {color && <div className="spb-summary-color" style={{ backgroundColor: color }} />}
        <span className="mx-text text-bold">{`${caption}: `}</span>
        <span className="mx-text">{summaryValue !== undefined ? summaryValue : formatValue(value)}</span>
    </div>
);
