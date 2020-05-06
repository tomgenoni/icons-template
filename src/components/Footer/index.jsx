import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Title, Text } from "../Type";
import Link from "../Link";

import { ReactComponent as Logo } from "../../assets/img/logo.svg";

function Footer() {
    const links = [
        {
            title: "Links",
            id: uuidv4(),
            links: [
                { title: "Desktop apps", id: uuidv4() },
                { title: "Mobile apps", id: uuidv4() },
                { title: "Web Clipper", id: uuidv4() },
                { title: "Customers", id: uuidv4() },
                { title: "What’s new", id: uuidv4() },
                { title: "Log in", id: uuidv4() },
                { title: "Sign up", id: uuidv4() },
            ],
        },
        {
            title: "Product",
            id: uuidv4(),
            links: [
                { title: "Overview", id: uuidv4() },
                { title: "Pricing", id: uuidv4() },
                { title: "Templates", id: uuidv4() },
                { title: "Notion for work", id: uuidv4() },
                { title: "Remote work", id: uuidv4() },
                { title: "Startups", id: uuidv4() },
                { title: "Students", id: uuidv4() },
                { title: "Educators", id: uuidv4() },
                { title: "Switch from Evernote", id: uuidv4() },
            ],
        },
        {
            title: "Company",
            id: uuidv4(),
            links: [
                { title: "About", id: uuidv4() },
                { title: "Jobs", id: uuidv4() },
                { title: "Media kit", id: uuidv4() },
                { title: "Tools & Craft", id: uuidv4() },
                { title: "Community", id: uuidv4() },
            ],
        },
        {
            title: "Help & Contact",
            id: uuidv4(),
            links: [
                { title: "Help & support", id: uuidv4() },
                { title: "Notionn for teams", id: uuidv4() },
                { title: "Twitter @NotionHQ", id: uuidv4() },
                { title: "Status", id: uuidv4() },
                { title: "Contact Sales", id: uuidv4() },
                { title: "Send us a message", id: uuidv4() },
                { title: "Email us", id: uuidv4() },
            ],
        },
    ];

    return (
        <footer className="-ml2 l_ml0">
            <div className="l_grid">
                {links.map((item, i) => (
                    <div className="l_col-2 mb5 l_order-1" key={item.id}>
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
                                    key={link.id}
                                >
                                    {link.title}
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
