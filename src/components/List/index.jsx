import React, { useState } from "react";
import Modal from "react-modal";

import styles from "./index.module.scss";

import { ReactComponent as IconCalendar } from "../../assets/img/icons/calendar.svg";
import { ReactComponent as IconList } from "../../assets/img/icons/list.svg";
import { ReactComponent as IconBoard } from "../../assets/img/icons/board.svg";
import { ReactComponent as IconText } from "../../assets/img/icons/text.svg";
import { ReactComponent as IconTable } from "../../assets/img/icons/table.svg";
import { ReactComponent as IconLinks } from "../../assets/img/icons/links.svg";

import { Title, Text } from "../Type";
import Wrap from "../Wrap";
import ModalContent from "../ModalContent";

const modalStyles = {
    overlay: {
        background: "rgba(0,0,0,.4)",
    },
    content: {
        background: "#f9f9f9",
        padding: "0",
        maxWidth: "960px",
        border: "none",
        top: "72px",
        bottom: "72px",
        marginLeft: "auto",
        marginRight: "auto",
        boxShadow:
            "rgba(15, 15, 15, 0.05) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 5px 10px, rgba(15, 15, 15, 0.2) 0px 15px 40px",
    },
};

Modal.setAppElement("#root");

function List({ data }) {
    const iconClass = `w4 h4 br2 flex-none ${styles.icon}`;

    const templateIcons = {
        calendar: <IconCalendar className={iconClass} />,
        list: <IconList className={iconClass} />,
        board: <IconBoard className={iconClass} />,
        text: <IconText className={iconClass} />,
        table: <IconTable className={iconClass} />,
        links: <IconLinks className={iconClass} />,
    };
    // Set state of active template to pass to modal
    const [activeTemplate, setActiveTemplate] = useState({});
    const handleTemplateClick = (templateData) => {
        setActiveTemplate(templateData);
        openModal();
    };

    // Modal state
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            {data.map((category) => (
                <div key={category.id} className="mb3 l_mb5">
                    <Wrap size="xwide">
                        <div className="flex mb4">
                            <div className={`flex-1 ${styles.border}`}></div>
                            <Title
                                className="tc relative ph3"
                                size={4}
                                headingLevel={2}
                            >
                                <span className="mr1">{category.emoji}</span>
                                <span>{category.title}</span>
                            </Title>
                            <div className={`flex-1 ${styles.border}`}></div>
                        </div>
                    </Wrap>
                    {category.sections.map((section, i) => (
                        <Wrap size="wide" key={section.id}>
                            <>
                                {/* Only show a section title if there's at least two the parent category */}
                                {category.sections.length > 1 &&
                                    category.sections[i].templates.length >
                                        0 && (
                                        <Title
                                            className="tc mb3"
                                            size={6}
                                            headingLevel={3}
                                        >
                                            {section.title}
                                        </Title>
                                    )}
                                {section.templates.length > 0 && (
                                    <ul className="grid grid-wide mb3">
                                        {section.templates.map(
                                            (template, i) => (
                                                <li
                                                    key={i}
                                                    className="m_col-6 l_col-4"
                                                >
                                                    <div
                                                        className="mb3 m_mb4 cursor-pointer"
                                                        role="button"
                                                        onClick={() =>
                                                            handleTemplateClick(
                                                                template
                                                            )
                                                        }
                                                    >
                                                        <div className="flex">
                                                            {
                                                                templateIcons[
                                                                    template
                                                                        .type
                                                                ]
                                                            }
                                                            <div className="ml3">
                                                                <Text
                                                                    size={7}
                                                                    className="fw5"
                                                                >
                                                                    {
                                                                        template.title
                                                                    }
                                                                </Text>
                                                                <Text
                                                                    size={7}
                                                                    className="black-300"
                                                                >
                                                                    {
                                                                        template
                                                                            .description
                                                                            .short
                                                                    }
                                                                </Text>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                )}
                            </>
                        </Wrap>
                    ))}
                </div>
            ))}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                style={modalStyles}
            >
                <ModalContent data={activeTemplate} />
            </Modal>
        </div>
    );
}

export default List;
