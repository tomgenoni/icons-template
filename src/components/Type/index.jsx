import React from "react";
import classNames from "classnames";

import styles from "./index.module.scss";

function Title({ children, size, className, headingLevel }) {
    const element = headingLevel ? `h${headingLevel}` : "div";
    const props = {
        className: classNames(styles[`title${size}`], className),
    };

    return React.createElement(element, props, children);
}

function Text({ children, size, className, elementType }) {
    const element = elementType || "p";
    const props = {
        className: classNames(styles[`text${size}`], className),
    };

    return React.createElement(element, props, children);
}

export { Title, Text };
