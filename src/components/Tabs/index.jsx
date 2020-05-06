import React from "react";
import { v4 as uuidv4 } from "uuid";

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
                <React.Fragment key={uuidv4()}>
                    <Tab
                        key={category.id}
                        onClick={() => setActiveTab(category.title)}
                        emoji={category.emoji}
                        title={category.title}
                        activeTab={activeTab}
                    />
                    {category.divider && <div className={styles.divider}></div>}
                </React.Fragment>
            ))}
        </div>
    );
}

export default Tabs;
