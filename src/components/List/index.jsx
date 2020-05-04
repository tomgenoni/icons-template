import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

function List({ data }) {
    // Set state of active template to pass to modal
    const [activeTemplate, setActiveTemplate] = useState("");
    const handleTemplateClick = (data) => {
        setActiveTemplate(data);
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
                    <div className="fw7">{category.title}</div>
                    {category.sections.map((section) => (
                        <div key={section.id}>
                            {/* Only show a section title if there's at least two the parent category */}
                            {category.sections.length > 1 && (
                                <h3>section: {section.title}</h3>
                            )}
                            <ul className="grid">
                                {section.templates.map((template, i) => (
                                    <li key={i} className="col-4">
                                        <button
                                            onClick={() =>
                                                handleTemplateClick(template)
                                            }
                                        >
                                            template: {template.title}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            ))}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
                <h2>{activeTemplate.title}</h2>
                <h2>{activeTemplate.author}</h2>
                <button onClick={closeModal}>close</button>
            </Modal>
        </div>
    );
}

export default List;
