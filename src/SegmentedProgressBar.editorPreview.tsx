import { ReactElement, createElement } from "react";
import { Segment } from "typings/General";
import { SegmentedProgressBarPreviewProps } from "../typings/SegmentedProgressBarProps";
import { ProgressBar } from "./components/ProgressBar";
import { Summary } from "./components/Summary";
import { Title } from "./components/Title";

export function preview({
    title,
    showPercentSum,
    showSummaryTotal,
    showSummary,
    styleObject
}: SegmentedProgressBarPreviewProps): ReactElement {
    const segmentList: Segment[] =
    [
        { caption: "A", color: "green", value: 8, summaryValue: "100-92%", onClick: () => {} },
        { caption: "B", color: "lightgreen", value: 8, summaryValue: "92-84%", onClick: () => {} },
        { caption: "C", color: "yellow", value: 8, summaryValue: "84-76%", onClick: () => {} },
        { caption: "D", color: "orange", value: 8, summaryValue: "76-68%", onClick: () => {} },
        { caption: "F", color: "red", value: 68, summaryValue: "68-0%", onClick: () => {} }

]

    return (
        <div className="spb" style={styleObject}>
            <Title title={title} />
            <ProgressBar
                segmentList={segmentList}
                valueSum={100}
                showPercentSum={showPercentSum}
                maxValue={100}
            />
            {showSummary && (
                <Summary segmentList={segmentList} valueSum={100} showSummaryTotal={showSummaryTotal} />
            )}
        </div>
    );
}

export function getPreviewCss(): string {
    return require("./ui/SegmentedProgressBar.css");
}
