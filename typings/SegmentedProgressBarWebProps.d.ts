/**
 * This file was generated from SegmentedProgressBarWeb.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ActionValue, DynamicValue, ListValue, ListActionValue, ListAttributeValue, ListExpressionValue } from "mendix";
import { Big } from "big.js";

export type DataTypeEnum = "static" | "dynamic";

export interface StaticSegmentListType {
    staticSummaryCaption: DynamicValue<string>;
    staticSummaryValue: DynamicValue<string>;
    staticValue: DynamicValue<Big>;
    staticColor: DynamicValue<string>;
    staticOnClick?: ActionValue;
}

export type SummaryTextTypeEnum = "value" | "manual";

export interface StaticSegmentListPreviewType {
    staticSummaryCaption: string;
    staticSummaryValue: string;
    staticValue: string;
    staticColor: string;
    staticOnClick: {} | null;
}

export interface SegmentedProgressBarWebContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    title?: DynamicValue<string>;
    dataType: DataTypeEnum;
    maxValue?: DynamicValue<Big>;
    staticSegmentList: StaticSegmentListType[];
    dynamicSegmentList: ListValue;
    dynamicSummaryCaption: ListExpressionValue<string>;
    dynamicSummaryValue: ListExpressionValue<string>;
    dynamicValue: ListAttributeValue<Big>;
    dynamicColor: ListAttributeValue<string>;
    dynamicOnClick?: ListActionValue;
    showPercentSum: boolean;
    showSummary: boolean;
    showSummaryTotal: boolean;
    summaryTextType: SummaryTextTypeEnum;
}

export interface SegmentedProgressBarWebPreviewProps {
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
    maxValue: string;
    staticSegmentList: StaticSegmentListPreviewType[];
    dynamicSegmentList: {} | { type: string } | null;
    dynamicSummaryCaption: string;
    dynamicSummaryValue: string;
    dynamicValue: string;
    dynamicColor: string;
    dynamicOnClick: {} | null;
    showPercentSum: boolean;
    showSummary: boolean;
    showSummaryTotal: boolean;
    summaryTextType: SummaryTextTypeEnum;
}
