import { ReactElement, createElement, Fragment } from "react";

type TitleProps = {
    title?: string;
};

export function Title({ title }: TitleProps): ReactElement {
    console.info("title", title)
    if (title !== undefined && title.trim() !== "") {
        return <span className="text-bold mx-text">{title}</span>;
    } else {
        return <Fragment />;
    }
}
