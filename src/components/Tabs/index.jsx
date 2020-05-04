import React from "react";

function Tabs({ activeTab, setActiveTab, data }) {
    return (
        <div>
            <button key="key" onClick={() => setActiveTab("All")}>
                All
            </button>
            {data.map((category) => (
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
