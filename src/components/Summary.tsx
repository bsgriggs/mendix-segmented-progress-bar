import { ReactElement, createElement } from "react";
import { Segment } from "typings/General";
import { SummaryItem } from "./SummaryItem";

type SummaryProps = {
    segmentList: Segment[];
    valueSum: number;
};

export function Summary({ segmentList, valueSum }: SummaryProps): ReactElement {
    return (
        <div className="spb-summary">
            {segmentList.map((segment, index) => (
                <SummaryItem key={index} caption={segment.caption} value={segment.value} color={segment.color} />
            ))}
                <SummaryItem caption="Total" value={valueSum} />
        </div>
    );
}
