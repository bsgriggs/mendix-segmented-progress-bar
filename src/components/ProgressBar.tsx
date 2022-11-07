import { ReactElement, createElement } from "react";
import { Segment } from "typings/General";
import { ProgressBarSegment } from "./ProgressBarSegment";

type ProgressBarProps = {
    segmentList: Segment[];
    valueSum: number;
    showPercentSum: boolean;
    maxValue?: number;
};

export function ProgressBar({ segmentList, showPercentSum, valueSum, maxValue }: ProgressBarProps): ReactElement {
    console.info("Progress bar", { segmentList, showPercentSum, valueSum, maxValue })
    return (
        <div className="spb-progress-bar-row">
            <div className="spb-progress-bar">
                {segmentList.map((segment, index) => (
                    <ProgressBarSegment key={index} segment={segment} percentage={(segment.value / (maxValue && maxValue > valueSum ? maxValue : valueSum)) * 100} />
                ))}
            </div>
            {showPercentSum && (
                <span className="mx-text">{`${Math.round(segmentList.reduce((sum, segment) => {
                    return sum + (segment.value / (maxValue ? maxValue : valueSum)) * 100;
                }, 0))} %`}</span>
            )}
        </div>
    );
}
