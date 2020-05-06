import React from "react";
import { Title, Text } from "../Type";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";

function ModalContent({ data }) {
    return (
        <>
            <div className="ph6 pt6 pb5 bg-white">
                <Title size={3} headingLevel={2} className="mb2">
                    {data.title}
                </Title>
                <Text size={6} className="black-300">
                    {data.description.short}
                </Text>
            </div>
            <div className="ph6 pv5">
                <div className="grid grid-wide">
                    <div className="l_col-7 mb4 l_mb0">
                        <Title size={7} headingLevel={3}>
                            Descripton
                        </Title>
                        <Text size={7} className="black-300">
                            {data.description.long}
                        </Text>
                    </div>
                    <div className="l_col-5">
                        <div className="flex">
                            <div className="flex-none mr3 w4">
                                {data.author === "Notion" ? (
                                    <Logo style={{ width: "100%" }} />
                                ) : (
                                    <img src="asset/i/avatar.png" alt="" />
                                )}
                            </div>
                            <div>
                                <Title size={7} headingLevel={3}>
                                    Created by
                                </Title>
                                <Text size={7} className="black-300">
                                    {data.author}
                                </Text>
                                <Text size={7} className="black-300">
                                    {data.date}
                                </Text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ph6">
                <img
                    src="asset/i/template.png"
                    alt="Template example"
                    className="br3 ba b-gray-300"
                />
            </div>
        </>
    );
}

export default ModalContent;
