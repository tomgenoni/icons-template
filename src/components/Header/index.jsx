import React from "react";
import styles from "./index.module.scss";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import { ReactComponent as Hamburger } from "../../assets/img/hamburger.svg";

function Header() {
    return (
        <header
            className={`${styles.header} flex justify-between items-center pv3 l_pv4`}
        >
            <div className="flex items-center">
                <Logo style={{ width: "28px" }} title="Notion logo" />
                <div className="ml2">Notion</div>
            </div>
            <div className="dn l_flex">
                <div>Product</div>
                <div className="ml4">Download</div>
                <div className="ml4">Remote work</div>
                <div className="ml4">Customers</div>
                <div className="ml4">Pricing</div>
                <div className="ml4">Jobs</div>
                <div className="ml4 pl4 bl b-gray-300">Log in</div>
                <div className="ml4">Sign in</div>
            </div>
            <div className="l_dn">
                <Hamburger style={{ width: "22px" }} title="Mobile menu" />
            </div>
        </header>
    );
}

export default Header;
