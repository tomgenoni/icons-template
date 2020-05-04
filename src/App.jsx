import React, { useState } from "react";
import data from "./data/data";
import Modal from "react-modal";

// Components
import Header from "./components/Header/";
import Hero from "./components/Hero/";
import Tabs from "./components/Tabs/";
import Search from "./components/Search/";
import List from "./components/List/";
import Wrap from "./components/Wrap/";

// Global SCSS
import "./assets/scss/root.scss";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};

Modal.setAppElement("#root");

function App() {
    let filteredData = data;

    const [activeTab, setActiveTab] = useState("All");

    const [query, setQuery] = useState("");
    const handleQuery = (event) => {
        setQuery(event.target.value);
    };

    if (activeTab !== "All") {
        filteredData = filteredData.filter(
            (category) => category.title === activeTab
        );
    }

    if (query !== "") {
        filteredData = JSON.parse(JSON.stringify(filteredData)).filter(
            (category) =>
                (category.sections = category.sections.filter(
                    (section) =>
                        (section.templates = section.templates.filter(
                            (template) =>
                                template.title
                                    .toLowerCase()
                                    .includes(query.toLowerCase())
                        ))
                ))
        );
    }

    var subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = "#f00";
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div>
            <Wrap size="wide">
                <Header />
            </Wrap>
            <Wrap size="wide">
                <Hero className="mb5 mt6" />
                <Tabs
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    data={data}
                />
                <Search query={query} handleQuery={handleQuery} />
                <List data={filteredData} />
            </Wrap>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
                <button onClick={closeModal}>close</button>
                <div>I am a modal</div>
                <form>
                    <input />
                    <button>tab navigation</button>
                    <button>stays</button>
                    <button>inside</button>
                    <button>the modal</button>
                </form>
            </Modal>
            <button onClick={openModal}>Open Modal</button>
        </div>
    );
}

export default App;
