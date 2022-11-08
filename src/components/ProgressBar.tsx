import { ReactElement, createElement } from "react";
import { Segment } from "typings/General";
import { ProgressBarSegment } from "./ProgressBarSegment";

type ProgressBarProps = {
    segmentList: Segment[];
    valueSum: number;
    showPercentSum: boolean;
    maxValue?: number;
};

const calculateSum = (segmentList: Segment[], valueSum: number, maxValue: number): number => {
    if (valueSum !== 0) {
        return (
            Math.round(
                segmentList.reduce((sum, segment) => {
                    return sum + (segment.value / (maxValue ? maxValue : valueSum)) * 100;
                }, 0) * 10
            ) / 10
        );
    } else {
        return 0;
    }
};

const calculatePercentage = (value: number, valueSum: number, maxValue?: number): number => {
    return (value / (maxValue && maxValue > valueSum ? maxValue : valueSum)) * 100
}

export const ProgressBar = ({ segmentList, showPercentSum, valueSum, maxValue }: ProgressBarProps): ReactElement => (
    <div className="spb-progress-bar-row">
        <div className="spb-progress-bar">
            {segmentList
                .filter(segment => segment.value !== undefined && segment.value > 0)
                .map((segment, index) => (
                    <ProgressBarSegment
                        key={index}
                        segment={segment}
                        percentage={calculatePercentage(segment.value, valueSum, maxValue)}
                    />
                ))}
        </div>
        {showPercentSum && <span className="mx-text">{`${calculateSum(segmentList, valueSum, maxValue || 0)} %`}</span>}
    </div>
);
