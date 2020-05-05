import React from "react";
import styles from "./index.module.scss";

function Search({ query, handleQuery }) {
    return (
        <input
            type="text"
            value={query}
            onChange={handleQuery}
            className={`mw6 center db ${styles.input}`}
        />
    );
}

export default Search;
