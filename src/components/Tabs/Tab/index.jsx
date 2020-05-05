import React from "react";
import classNames from "classnames";
import styles from "./index.module.scss";

function Tab({ onClick, emoji, title, activeTab }) {
    return (
        <button
            onClick={onClick}
            className={`ph2 l_ph4 pv2 l_pv3 tc br3 ${styles.tab}`}
        >
            <span
                className={`db mb1 m_mb2 ${styles.emoji}`}
                role="img"
                aria-label="all"
            >
                {emoji}
            </span>
            <div
                className={classNames(`pb1 ${styles.title}`, {
                    [styles.active]: activeTab === title,
                })}
            >
                {title}
            </div>
        </button>
    );
}

export default Tab;
