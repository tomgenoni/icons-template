import React from "react";
import styles from "./index.module.scss";

function Header() {
    return (
        <header
            className={`${styles.header} flex justify-between items-center pv3`}
        >
            <div>logo</div>
            <div className="flex">
                <div>item</div>
                <div className="ml3">item</div>
                <div className="ml3">item</div>
                <div className="ml3">item</div>
                <div className="ml3">item</div>
                <div className="ml3">item</div>
                <div className="ml3 pl3 bl b-gray-300">item</div>
            </div>
        </header>
    );
}

export default Header;
