import React from "react";
import Tab from "./Tab";

import styles from "./index.module.scss";

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
                <>
                    <Tab
                        key={category.id}
                        onClick={() => setActiveTab(category.title)}
                        emoji={category.emoji}
                        title={category.title}
                        activeTab={activeTab}
                    />
                    {category.divider && (
                        <div
                            className={`bl b-gray-300 ph1 ml1 ${styles.divider}`}
                        ></div>
                    )}
                </>
            ))}
        </div>
    );
}

export default Tabs;
