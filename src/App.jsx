import React, { useState } from "react";

import { Text } from "./components/Type";
import Link from "./components/Link";

import styles from "./index.module.scss";

// Data imports of json and function to combine it
import categories from "./data/categories";
import templates from "./data/templates";
import combinedData from "./data/combinedData";

// // Global SCSS
import "./assets/scss/root.scss";

// Components
import Header from "./components/Header/";
import Hero from "./components/Hero/";
import Tabs from "./components/Tabs/";
import Search from "./components/Search/";
import List from "./components/List/";
import Wrap from "./components/Wrap/";
import Footer from "./components/Footer/";

// // Global SCSS
import "./assets/scss/atomic.scss";

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
        filteredData = filteredData.filter(
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
                <div className="mb5 mt6">
                    <Hero
                        imgPath="/asset/i/illu.png"
                        title="Notion for inspiration"
                        subtitle="Get started with templates to help organize your work and your life."
                    />
                    <div className="tc pt2">
                        <Text size={7} elementType="span">
                            <Link to="https://notion.so/">
                                Duplicate a template
                            </Link>
                        </Text>
                        <span className="ph2 gray">·</span>
                        <Text size={7} elementType="span">
                            <Link to="https://notion.so/">
                                Share a template
                            </Link>
                        </Text>
                    </div>
                </div>
                <div className="l_flex l_items-center l_justify-center mb6">
                    <Tabs
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        categories={categories}
                    />
                    <div
                        className={`l_ml6 mt3 l_mt0 l_w6 ${styles.searchWrap}`}
                    >
                        <Search
                            query={query}
                            handleQuery={handleQuery}
                            placeholder="Filter templates"
                        />
                    </div>
                </div>
            </Wrap>
            <div className="mb6 l_mb7">
                <List data={filteredData} />
            </div>
            <Wrap size="xwide">
                <hr className="bb b-gray-300 dn l_db" />
            </Wrap>
            <Wrap size="wide">
                <div className="l_pt6 mb5">
                    <Footer />
                </div>
            </Wrap>
        </div>
    );
}

export default App;
