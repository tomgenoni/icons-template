import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./index.module.scss";

function Wrap({ children, size }) {
    return (
        <div
            className={classNames(styles.wrap, {
                [styles.normal]: size === "normal",
                [styles.wide]: size === "wide",
            })}
        >
            {children}
        </div>
    );
}

Wrap.propTypes = {
    size: PropTypes.oneOf(["normal", "wide"]),
};

Wrap.defaultProps = {
    size: "normal",
};

export default Wrap;
