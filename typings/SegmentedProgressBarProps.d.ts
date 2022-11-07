/**
 * This file was generated from SegmentedProgressBar.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ActionValue, DynamicValue, ListValue, ListActionValue, ListAttributeValue } from "mendix";
import { Big } from "big.js";

export type DataTypeEnum = "static" | "dynamic";

export type NumberTypeEnum = "rawValue" | "percentage";

export interface StaticSegmentListType {
    staticCaption: DynamicValue<string>;
    staticValue: DynamicValue<Big>;
    staticColor: DynamicValue<string>;
    staticOnClick?: ActionValue;
}

export interface StaticSegmentListPreviewType {
    staticCaption: string;
    staticValue: string;
    staticColor: string;
    staticOnClick: {} | null;
}

export interface SegmentedProgressBarContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    title?: DynamicValue<string>;
    dataType: DataTypeEnum;
    numberType: NumberTypeEnum;
    maxValue?: DynamicValue<Big>;
    staticSegmentList: StaticSegmentListType[];
    dynamicSegmentList: ListValue;
    dynamicCaption: ListAttributeValue<string>;
    dynamicValue: ListAttributeValue<Big>;
    dynamicColor: ListAttributeValue<string>;
    dynamicOnClick?: ListActionValue;
    showPercentSum: boolean;
    showSummary: boolean;
}

export interface SegmentedProgressBarPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    title: string;
    dataType: DataTypeEnum;
    numberType: NumberTypeEnum;
    maxValue: string;
    staticSegmentList: StaticSegmentListPreviewType[];
    dynamicSegmentList: {} | { type: string } | null;
    dynamicCaption: string;
    dynamicValue: string;
    dynamicColor: string;
    dynamicOnClick: {} | null;
    showPercentSum: boolean;
    showSummary: boolean;
}
