import { ReactElement, createElement } from "react";

type SummaryItemProps = {
    caption: string;
    value: number;
    color?: string;
    onClick?: () => void;
};

export function SummaryItem({ caption, color, value, onClick }: SummaryItemProps): ReactElement {
    return (
        <div className="spb-summary-item" onClick={() => (onClick !== undefined ? onClick() : {})}>
            {color &&(
                <div className="spb-summary-color" style={{backgroundColor: color}}/>
            )} 
            <span className="mx-text text-bold">{`${caption}: `}</span>
            <span className="mx-text">{value.toFixed(2)}</span>
        </div>
    );
}
