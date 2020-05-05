import React, { useState } from "react";

// Data imports of json and function to combine it
import categories from "./data/categories";
import templates from "./data/templates";
import combinedData from "./data/combinedData";

// // Global SCSS
import "./assets/css/root.css";

// Components
import Header from "./components/Header/";
import Hero from "./components/Hero/";
import Tabs from "./components/Tabs/";
import Search from "./components/Search/";
import List from "./components/List/";
import Wrap from "./components/Wrap/";
import Footer from "./components/Footer/";

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
                <div className="mb4 mt6">
                    <Hero
                        imgPath="/asset/i/illu.png"
                        title="Notion for inspiration"
                        subtitle="Get started with templates to help organize your work and your life."
                    />
                </div>
                <div className="l_flex l_items-center l_justify-center mb5">
                    <Tabs
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        categories={categories}
                    />
                    <div className="l_ml6 mt3 l_mt0">
                        <Search query={query} handleQuery={handleQuery} />
                    </div>
                </div>
                <div className="mb7">
                    <List data={filteredData} />
                </div>
            </Wrap>
            <Wrap size="xwide">
                <hr className="bb b-gray-300 mb6" />
            </Wrap>
            <Wrap size="wide">
                <Footer />
            </Wrap>
        </div>
    );
}

export default App;
