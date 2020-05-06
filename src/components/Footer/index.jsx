import React from "react";
import { Title, Text } from "../Type";
import Link from "../Link";

import { ReactComponent as Logo } from "../../assets/img/logo.svg";

function Footer() {
    const links = [
        {
            title: "Links",
            links: [
                "Desktop apps",
                "Mobile apps",
                "Web Clipper",
                "Customers",
                "What’s new",
                "Log in",
                "Sign up",
            ],
        },
        {
            title: "Product",
            links: [
                "Overview",
                "Pricing",
                "Templates",
                "Notion for work",
                "Remote work",
                "Startups",
                "Students",
                "Educators",
                "Switch from Evernote",
            ],
        },
        {
            title: "Company",
            links: ["About", "Jobs", "Media kit", "Tools & Craft", "Community"],
        },
        {
            title: "Help & Contact",
            links: [
                "Help & support",
                "Notionn for teams",
                "Twitter @NotionHQ",
                "Status",
                "Contact Sales",
                "Send us a message",
                "Email us",
            ],
        },
    ];

    return (
        <footer className="-ml2 l_ml0">
            <div className="l_grid">
                {links.map((item, i) => (
                    <div className="l_col-2 mb5 l_order-1">
                        <Title
                            size={7}
                            className="ml2 mb2 pb2 l_pb0 bb l_bn b-gray-300"
                        >
                            {item.title}
                        </Title>
                        <Text size={7} elementType="div" className="lh-base">
                            {item.links.map((link, i) => (
                                <Link
                                    to="https://notion.so"
                                    type="hover"
                                    display="block"
                                >
                                    {link}
                                </Link>
                            ))}
                        </Text>
                    </div>
                ))}

                <div className="l_col-4 mb5 l_order-0">
                    <div className="ml2 l_ml0">
                        <div className="flex items-center mb3">
                            <Logo
                                style={{ width: "28px" }}
                                title="Notion logo"
                                className="mr2"
                            />
                            <div className="fw5" style={{ fontSize: "15px" }}>
                                Notion
                            </div>
                        </div>
                        <Text
                            size={8}
                            className="mb2 black-300 fw5"
                            elementType="div"
                        >
                            The all-in-one workspace for your <br />
                            notes, tasks, wikis, and databases.
                        </Text>
                        <Text
                            size={8}
                            className="mb2 black-300 fw5"
                            elementType="div"
                        >
                            © 2020 Notion Labs, Inc.
                        </Text>
                        <Text size={8} className="fw5" elementType="div">
                            <Link to="https://notino.so" type="underline">
                                Terms &amp; Privacy
                            </Link>
                        </Text>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
