import React, { useState } from "react";
import Modal from "react-modal";

import { Title, Text } from "../Type";
import Wrap from "../Wrap";
import ModalContent from "../ModalContent";

import styles from "./index.module.scss";

Modal.setAppElement("#root");

function List({ data }) {
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
                <div key={category.id} className="mb3">
                    <Wrap size="xwide">
                        <div className="flex mb3">
                            <div className={`flex-1 ${styles.border}`}></div>
                            <Title
                                className="tc relative ph3"
                                size={5}
                                headingLevel={2}
                            >
                                <span className="mr1">{category.emoji}</span>
                                <span>{category.title}</span>
                            </Title>
                            <div className={`flex-1 ${styles.border}`}></div>
                        </div>
                    </Wrap>
                    {category.sections.map((section) => (
                        <Wrap size="wide" key={section.id}>
                            <>
                                {/* Only show a section title if there's at least two the parent category */}
                                {category.sections.length > 1 && (
                                    <Title
                                        className="tc mb3"
                                        size={6}
                                        headingLevel={3}
                                    >
                                        {section.title}
                                    </Title>
                                )}
                                <ul className="grid grid-wide">
                                    {section.templates.map((template, i) => (
                                        <li key={i} className="m_col-6 l_col-4">
                                            <div
                                                className={`mb4 ${styles.template}`}
                                                role="button"
                                                onClick={() =>
                                                    handleTemplateClick(
                                                        template
                                                    )
                                                }
                                            >
                                                <div className="flex">
                                                    <div className="w4 h4 bg-red mr3 flex-none br2">
                                                        x
                                                    </div>
                                                    <div className="db">
                                                        <Text
                                                            size={7}
                                                            className="fw5"
                                                        >
                                                            {template.title}
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
                                    ))}
                                </ul>
                            </>
                        </Wrap>
                    ))}
                </div>
            ))}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
                <ModalContent data={activeTemplate} />
                <button onClick={closeModal}>close</button>
            </Modal>
        </div>
    );
}

export default List;
