export default function combinedData(categories, templates) {
    const data = categories;

    data.forEach((category) => {
        const temp = [];
        templates.forEach((entry) => {
            const tags = entry.tags;
            tags.forEach((tag) => {
                if (tag.primary === category.title) {
                    temp.push(tag.secondary)
                }
            })
        });

        const secondaryArr = [...new Set(temp)].sort();

        category.sections = []

        secondaryArr.forEach((secondary, i) => {
            category.sections.push({
                title: secondary,
                id: i,
                templates: []
            })
        })
    })

    data.forEach((category) => {
        templates.forEach((entry) => {
            const tags = entry.tags;
            tags.forEach((tag) => {
                if (tag.primary === category.title) {
                    category.sections.forEach((templatesItem, i) => {
                        if (tag.secondary === templatesItem.title) {
                            category.sections[i].templates.push({
                                title: entry.title,
                                type: entry.type,
                                author: entry.author,
                                description: entry.description,
                            })
                        }
                    })
                }
            })
        });
    })

    // data.forEach((category) => {
    //     console.log(category.title);
    //     category.sections.forEach((section) => {
    //         console.log(`  - ${section.title}`);
    //         section.templates.forEach((template) => {
    //             console.log(`    - ${template.title}`)
    //             console.log(`       - ${template.type}`)
    //             console.log(`       - ${template.description.short}`)
    //             console.log(`       - ${template.description.long}`)
    //         })
    //     })
    //     console.log("");
    // })

    return data;
}
