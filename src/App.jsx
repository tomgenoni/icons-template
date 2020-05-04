import React, { useState } from "react";
import data from "./data/data";

// Components
import Header from "./components/Header/";
import Hero from "./components/Hero/";
import Tabs from "./components/Tabs/";
import Search from "./components/Search/";
import List from "./components/List/";
import Wrap from "./components/Wrap/";

// Global SCSS
import "./assets/scss/root.scss";

function App() {
    // Tab states (parent categories)
    const [activeTab, setActiveTab] = useState("All");

    // Filter input state
    const [query, setQuery] = useState("");
    const handleQuery = (event) => {
        setQuery(event.target.value);
    };

    // Filtered data for the list
    let filteredData = data;

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

    return (
        <div>
            <Wrap size="wide">
                <Header />
                <Hero className="mb5 mt6" />
                <Tabs
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    data={data}
                />
                <Search query={query} handleQuery={handleQuery} />
                <List data={filteredData} />
            </Wrap>
        </div>
    );
}

export default App;
