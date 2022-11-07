import { ReactElement, createElement } from "react";
import { Segment } from "typings/General";

type ProgressBarSegmentProps = {
    segment: Segment;
    percentage: number;
}

export function ProgressBarSegment({segment,percentage}: ProgressBarSegmentProps): ReactElement {
    return (
        <div className="spb-segment" style={{backgroundColor: segment.color, width: `${percentage}%`}} onClick={()=>segment.onClick()}>
            {/* <p>{`Caption: ${segment.caption}`}</p>
            <p>{`Value: ${segment.value}`}</p>
            <p>{`${percentage}%`}</p> */}
        </div>
    );
}
