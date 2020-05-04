import React, { useState } from "react";

// Data imports of json and function to combine it
import categories from "./data/categories";
import templates from "./data/templates";
import combinedData from "./data/combinedData";

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
    // State ------------------------
    // Tabs (parent categories)
    const [activeTab, setActiveTab] = useState("All");

    // Filter input
    const [query, setQuery] = useState("");
    const handleQuery = (event) => {
        setQuery(event.target.value);
    };

    // Data ------------------------
    // Combining categories and individual templates into one object
    let filteredData = combinedData(categories, templates);

    // Determines active tab and filters data by category title
    if (activeTab !== "All") {
        filteredData = filteredData.filter(
            (category) => category.title === activeTab
        );
    }

    // Filters on title of template only.
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
                    categories={categories}
                />
                <Search query={query} handleQuery={handleQuery} />
                <List data={filteredData} />
            </Wrap>
        </div>
    );
}

export default App;
