import React from "react";
import classNames from "classnames";

import styles from "./index.module.scss";

function Wrap({ children, size = "normal" }) {
    return (
        <div
            className={classNames(styles.wrap, {
                [styles.normal]: size === "normal",
                [styles.wide]: size === "wide",
                [styles.xwide]: size === "xwide",
            })}
        >
            {children}
        </div>
    );
}

export default Wrap;
