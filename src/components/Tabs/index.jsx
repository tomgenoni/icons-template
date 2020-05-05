import React from "react";
import Tab from "./Tab";

function Tabs({ activeTab, setActiveTab, categories }) {
    return (
        <div className="flex justify-center flex-wrap">
            <Tab
                onClick={() => setActiveTab("All")}
                emoji="🏠"
                title="All"
                activeTab={activeTab}
            />
            {categories.map((category) => (
                <Tab
                    key={category.id}
                    onClick={() => setActiveTab(category.title)}
                    emoji={category.emoji}
                    title={category.title}
                    activeTab={activeTab}
                />
            ))}
        </div>
    );
}

export default Tabs;
