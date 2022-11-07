import { ReactElement, createElement } from "react";
import { SegmentedProgressBarPreviewProps } from "../typings/SegmentedProgressBarProps";

export function preview({
    title,
    // dataType,
    // numberType,
    // totalValue,
    // staicSegmentList,
    // dynamicCaption,
    // dynamicColor,
    // dynamicOnClick,
    // dynamicSegmentList,
    // dynamicValue,
    // showPercentSum,
    // showValueSum,
    styleObject
}: SegmentedProgressBarPreviewProps): ReactElement {
    return (
        <div className="spb" style={styleObject}>
            {title !== undefined && title.trim() !== "" && <span className="mx-text"></span>}
        </div>
    );
}

export function getPreviewCss(): string {
    return require("./ui/SegmentedProgressBar.css");
}
