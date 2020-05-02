import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./index.module.scss";

function Title({ children, size, className, headingLevel }) {
    const element = headingLevel ? `h${headingLevel}` : "div";
    const props = {
        className: classNames(styles[`title${size}`], className),
    };

    return React.createElement(element, props, children);
}

Title.propTypes = {
    size: PropTypes.oneOf(["1", "2", "3"]),
    headingLevel: PropTypes.oneOf(["1", "2", "3", "4", "5", "6"]),
};

function Text({ children, size = 1, className }) {
    const element = "p";
    const props = {
        className: classNames(styles[`text${size}`], className),
    };

    return React.createElement(element, props, children);
}

Text.propTypes = {
    size: PropTypes.oneOf(["1", "2", "3"]),
    headingLevel: PropTypes.oneOf(["1", "2", "3", "4", "5", "6"]),
};

export { Title, Text };
