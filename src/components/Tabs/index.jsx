import React from "react";

function Tabs({ activeTab, setActiveTab, categories }) {
    return (
        <div>
            <button key="key" onClick={() => setActiveTab("All")}>
                All
            </button>
            {categories.map((category) => (
                <button
                    key={category.id}
                    onClick={() => setActiveTab(category.title)}
                >
                    {category.title}
                </button>
            ))}
        </div>
    );
}

export default Tabs;
