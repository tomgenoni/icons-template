const categories = [{
    title: 'Education',
    id: 0
}, {
    title: 'Work',
    id: 1
}];

const templates = [{
    title: 'Meeting notes',
    tags: [{
            primary: 'Work',
            secondary: 'Tools'
        },
        {
            primary: 'Education',
            secondary: 'Students'
        }
    ],
}, {
    title: 'Club Homepage',
    tags: [{
        primary: 'Education',
        secondary: 'Teachers'
    }]
}, {
    title: 'Homework assignment',
    tags: [{
        primary: 'Education',
        secondary: 'Teachers'
    }]
}, {
    title: 'Quiz',
    tags: [{
        primary: 'Education',
        secondary: 'Teachers'
    }]
}, {
    title: 'Lesson Plan',
    tags: [{
        primary: 'Education',
        secondary: 'Teachers'
    }]
}, {
    title: 'Design review',
    tags: [{
        primary: 'Work',
        secondary: 'Designers'
    }]
}]


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
//         })
//     })
//     console.log("");
// })

export default data;
