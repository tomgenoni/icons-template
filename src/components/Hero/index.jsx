import React from "react";
import { Title, Text } from "../Type/";

function Hero({ title, subtitle, imgPath }) {
    return (
        <div className="tc">
            <img src={imgPath} alt="" className="mw7 center mb3" />
            <Title size={1} className="mb2 m_mb3">
                {title}
            </Title>
            <Text className="black-300 center">{subtitle}</Text>
        </div>
    );
}

export default Hero;
