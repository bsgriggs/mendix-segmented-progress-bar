import { ReactElement, createElement } from "react";
import { Segment } from "typings/General";
import { SummaryItem } from "./SummaryItem";

type SummaryProps = {
    segmentList: Segment[];
    valueSum: number;
    showSummaryTotal: boolean;
};

export const Summary = ({ segmentList, valueSum, showSummaryTotal }: SummaryProps): ReactElement => (
    <div className="spb-summary">
        {segmentList.map((segment, index) => (
            <SummaryItem
                key={index}
                caption={segment.caption}
                value={segment.value}
                summaryValue={segment.summaryValue}
                color={segment.color}
            />
        ))}
        {showSummaryTotal && <SummaryItem caption="Total" value={valueSum} />}
    </div>
);
