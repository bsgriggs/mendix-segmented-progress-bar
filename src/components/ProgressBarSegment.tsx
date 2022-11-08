import { ReactElement, createElement } from "react";
import { Segment } from "typings/General";

type ProgressBarSegmentProps = {
    segment: Segment;
    percentage: number;
};

export const ProgressBarSegment = ({ segment, percentage }: ProgressBarSegmentProps): ReactElement => (
    <div
        className="spb-segment"
        style={{ backgroundColor: segment.color, width: `${percentage}%` }}
        onClick={() => segment.onClick()}
    ></div>
);
