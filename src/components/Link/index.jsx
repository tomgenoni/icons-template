import React from "react";
import classNames from "classnames";

import styles from "./index.module.scss";

function Link({ to, type = "underline", display, children }) {
    return (
        <a
            href={to}
            className={classNames(`${display}`, {
                [styles.underline]: type === "underline",
                [styles.hover]: type === "hover",
                db: display === "block",
                dib: display === "inline-block",
            })}
        >
            {children}
        </a>
    );
}

export default Link;
