import React from "react";
import { Title, Text } from "../Type";
import Link from "../Link";

function Footer() {
    return (
        <footer className="-ml2 l_ml0">
            <div className="l_grid">
                <div className="l_col-4 mb5">
                    <div className="ml2 l_ml0">adsfasdf</div>
                </div>
                <div className="l_col-2 mb5">
                    <Title
                        size={7}
                        className="ml2 mb2 l_mb0 pb2 l_pb0 bb l_bn b-gray-300"
                    >
                        Links
                    </Title>
                    <Text size={7}>
                        <Link
                            to="https://notion.com"
                            type="hover"
                            display="block"
                        >
                            foo
                        </Link>
                    </Text>
                    <Text size={7}>
                        <Link
                            to="https://notion.com"
                            type="hover"
                            display="block"
                        >
                            foo
                        </Link>
                    </Text>
                </div>
                <div className="l_col-2 mb5">
                    <Title
                        size={7}
                        className="ml2 mb2 l_mb0 pb2 l_pb0 bb l_bn b-gray-300"
                    >
                        Links
                    </Title>
                    <Text size={7}>
                        <Link
                            to="https://notion.com"
                            type="hover"
                            display="block"
                        >
                            foo
                        </Link>
                    </Text>
                    <Text size={7}>
                        <Link
                            to="https://notion.com"
                            type="hover"
                            display="block"
                        >
                            foo
                        </Link>
                    </Text>
                </div>
                <div className="l_col-2 mb5">
                    <Title
                        size={7}
                        className="ml2 mb2 l_mb0 pb2 l_pb0 bb l_bn b-gray-300"
                    >
                        Links
                    </Title>
                    <Text size={7}>
                        <Link
                            to="https://notion.com"
                            type="hover"
                            display="block"
                        >
                            foo
                        </Link>
                    </Text>
                    <Text size={7}>
                        <Link
                            to="https://notion.com"
                            type="hover"
                            display="block"
                        >
                            foo
                        </Link>
                    </Text>
                </div>
                <div className="l_col-2 mb5">
                    <Title
                        size={7}
                        className="ml2 mb2 l_mb0 pb2 l_pb0 bb l_bn b-gray-300"
                    >
                        Links
                    </Title>
                    <Text size={7}>
                        <Link
                            to="https://notion.com"
                            type="hover"
                            display="block"
                        >
                            foo
                        </Link>
                    </Text>
                    <Text size={7}>
                        <Link
                            to="https://notion.com"
                            type="hover"
                            display="block"
                        >
                            foo
                        </Link>
                    </Text>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
