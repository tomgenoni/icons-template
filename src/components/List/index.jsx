import React from "react";
//import styles from "./index.module.scss";

function List({ data }) {
    return (
        <div>
            {data.map((category) => (
                <div key={category.id} className="mb3">
                    <div className="fw7">{category.title}</div>
                    {category.sections.map((section) => (
                        <div key={section.id}>
                            {category.sections.length > 1 && (
                                <h3>section: {section.title}</h3>
                            )}
                            <ul className="grid">
                                {section.templates.map((template, i) => (
                                    <li key={i} className="col-4">
                                        template: {template.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default List;
