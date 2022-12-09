import { ReactElement, createElement, Fragment } from "react";

type TitleProps = {
    title?: string;
};

export const Title = ({ title }: TitleProps): ReactElement =>
    title !== undefined && title.trim() !== "" ? <span className="text-bold mx-text">{title}</span> : <Fragment />;
