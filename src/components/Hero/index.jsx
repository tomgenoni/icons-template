import React from "react";
import styles from "./index.module.scss";

import { Title, Text } from "../Type/";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";

function Hero({ className }) {
    return (
        <div className={`${styles.hero} ${className} grid`}>
            <div className="col-6">
                <Title size="1" className="mb3">
                    Notion for inspiration
                </Title>
                <Text className="black-300 mw7">
                    Get started with templates to help you organize your work
                    and your life.
                </Text>
                <Logo style={{ width: "30px" }} title="Notion logo" />
            </div>
            <div className="col-6">
                <img src="/asset/i/illu.png" alt="" className="w100 -mt3" />
            </div>
        </div>
    );
}

export default Hero;
