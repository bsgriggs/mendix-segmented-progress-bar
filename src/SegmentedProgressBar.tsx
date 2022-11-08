import { ReactElement, createElement, useState, Fragment, useEffect } from "react";
import { SegmentedProgressBarContainerProps } from "../typings/SegmentedProgressBarProps";
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

export function SegmentedProgressBar({
    name,
    title,
    dataType,
    // numberType,
    maxValue,
    staticSegmentList,
    dynamicSegmentList,
    dynamicCaption,
    dynamicColor,
    dynamicValue,
    dynamicOnClick,
    showPercentSum,
    showSummary,
    style
}: SegmentedProgressBarContainerProps): ReactElement {
    const [segmentList, setSegmentList] = useState<Segment[]>([]);
    const [valueSum, setValueSum] = useState<number>();
    const [adjustedMaxValue, setAdjustedMaxValue] = useState<number>();

    //Update Max Value
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
                            caption: dynamicCaption.get(dynamicSegment).value,
                            color: dynamicColor.get(dynamicSegment).value,
                            value: value,
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
                        caption: staticSegment.staticCaption.value,
                        color: staticSegment.staticColor.value,
                        value: value,
                        onClick: () => callMxAction(staticSegment.staticOnClick)
                    } as Segment;
                })
            );
            setValueSum(sum);
        }
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
                {showSummary && <Summary segmentList={segmentList} valueSum={valueSum} />}
            </div>
        );
    } else {
        return <Fragment />;
    }
}
