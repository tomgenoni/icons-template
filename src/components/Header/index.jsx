import React from "react";
import styles from "./index.module.scss";

function Header() {
    return (
        <header
            className={`${styles.header} flex justify-between items-center pv4`}
        >
            <div>logo</div>
            <div className="flex">
                <div>Product</div>
                <div className="ml4">Download</div>
                <div className="ml4">Remote work</div>
                <div className="ml4">Customers</div>
                <div className="ml4">Pricing</div>
                <div className="ml4">Jobs</div>
                <div className="ml4 pl4 bl b-gray-300">Log in</div>
                <div className="ml4">Sign in</div>
            </div>
        </header>
    );
}

export default Header;
