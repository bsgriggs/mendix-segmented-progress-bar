import { ReactElement, createElement, useState, Fragment, useEffect } from "react";
import { SegmentedProgressBarWebContainerProps } from "../typings/SegmentedProgressBarWebProps";
import { ValueStatus, ActionValue } from "mendix";
import "./ui/SegmentedProgressBar.css";
import { Title } from "./components/Title";
import { Summary } from "./components/Summary";
import { Segment } from "typings/General";
import { ProgressBar } from "./components/ProgressBar";

const callMxAction = (action?: ActionValue): void => {
    if (action !== undefined && action.canExecute && action.isExecuting === false) {
        action.execute();
    }
};

export function SegmentedProgressBarWeb({
    name,
    title,
    dataType,
    maxValue,
    staticSegmentList,
    dynamicSegmentList,
    dynamicSummaryCaption,
    dynamicSummaryValue,
    dynamicColor,
    dynamicValue,
    dynamicOnClick,
    showPercentSum,
    showSummary,
    summaryTextType,
    showSummaryTotal,
    style
}: SegmentedProgressBarWebContainerProps): ReactElement {
    const [segmentList, setSegmentList] = useState<Segment[]>([]);
    const [valueSum, setValueSum] = useState<number>();
    const [adjustedMaxValue, setAdjustedMaxValue] = useState<number>();

    // Update Max Value
    useEffect(() => {
        const newMaxValue =
            maxValue !== undefined && maxValue.value !== undefined ? maxValue.value.toNumber() : undefined;
        setAdjustedMaxValue(newMaxValue);
    }, [maxValue]);

    // Load Dynamic Segment List
    useEffect(() => {
        if (dataType === "dynamic" && dynamicSegmentList.status === ValueStatus.Available) {
            if (dynamicSegmentList.items !== undefined) {
                let sum = 0;
                setSegmentList(
                    dynamicSegmentList.items.map(dynamicSegment => {
                        const objectValue = dynamicValue.get(dynamicSegment).value;
                        const value = objectValue?.toNumber() || 0;
                        sum += value;
                        return {
                            caption: dynamicSummaryCaption.get(dynamicSegment).value as string,
                            color: dynamicColor.get(dynamicSegment).value,
                            value,
                            summaryValue:
                                summaryTextType === "manual"
                                    ? dynamicSummaryValue.get(dynamicSegment).value
                                    : undefined,
                            onClick: () => {
                                if (dynamicOnClick !== undefined) {
                                    callMxAction(dynamicOnClick.get(dynamicSegment));
                                }
                            }
                        } as Segment;
                    })
                );
                setValueSum(sum);
            }
        }
        /* eslint-disable react-hooks/exhaustive-deps */
    }, [dynamicSegmentList]);

    // Load Static Segment List
    useEffect(() => {
        if (dataType === "static") {
            let sum = 0;
            setSegmentList(
                staticSegmentList.map(staticSegment => {
                    const objectValue = staticSegment.staticValue.value;
                    const value = objectValue?.toNumber() || 0;
                    sum += value;
                    return {
                        caption: staticSegment.staticSummaryCaption.value,
                        color: staticSegment.staticColor.value,
                        value,
                        summaryValue: summaryTextType === "manual" ? staticSegment.staticSummaryValue.value : undefined,
                        onClick: () => callMxAction(staticSegment.staticOnClick)
                    } as Segment;
                })
            );
            setValueSum(sum);
        }
        /* eslint-disable react-hooks/exhaustive-deps */
    }, [staticSegmentList]);

    if (title?.status !== ValueStatus.Loading && valueSum !== undefined) {
        return (
            <div id={name} className="spb" style={style}>
                <Title title={title?.value} />
                <ProgressBar
                    segmentList={segmentList}
                    valueSum={valueSum}
                    showPercentSum={showPercentSum}
                    maxValue={adjustedMaxValue}
                />
                {showSummary && (
                    <Summary segmentList={segmentList} valueSum={valueSum} showSummaryTotal={showSummaryTotal} />
                )}
            </div>
        );
    } else {
        return <Fragment />;
    }
}
