const categories = [{
    title: 'Remote',
    id: 0
}, {
    title: 'COVID-19',
    id: 1
}, {
    title: 'Work',
    id: 2
}, {
    title: 'Home',
    id: 3
}, {
    title: 'Life',
    id: 4
}, {
    title: 'Education',
    id: 5
}];

const templates = [{
    title: 'Meeting notes',
    type: 'foo',
    author: 'Notion',
    description: {
        short: 'this is the short description',
        long: 'She was so deeply imbedded in my consciousness that for the first year of school I seem to have believed that each of my teachers was my mother in disguise.'
    },
    tags: [{
            primary: 'Remote',
            secondary: 'Tools'
        },
        {
            primary: 'Work',
            secondary: 'Students'
        }
    ],
}, {
    title: 'Club Homepage',
    type: 'foo',
    author: 'Notion',
    description: {
        short: 'this is the short description',
        long: 'She was so deeply imbedded in my consciousness that for the first year of school I seem to have believed that each of my teachers was my mother in disguise.'
    },
    tags: [{
        primary: 'COVID-19',
        secondary: 'Tools'
    }]
}, {
    title: 'Homework assignment',
    type: 'foo',
    author: 'Notion',
    description: {
        short: 'this is the short description',
        long: 'She was so deeply imbedded in my consciousness that for the first year of school I seem to have believed that each of my teachers was my mother in disguise.'
    },
    tags: [{
        primary: 'Education',
        secondary: 'Teachers'
    }]
}, {
    title: 'Quiz',
    type: 'foo',
    author: 'Notion',
    description: {
        short: 'this is the short description',
        long: 'She was so deeply imbedded in my consciousness that for the first year of school I seem to have believed that each of my teachers was my mother in disguise.'
    },
    tags: [{
        primary: 'Education',
        secondary: 'Teachers'
    }]
}, {
    title: 'Puzzle tracker',
    type: 'foo',
    author: 'Notion',
    description: {
        short: 'this is the short description',
        long: 'She was so deeply imbedded in my consciousness that for the first year of school I seem to have believed that each of my teachers was my mother in disguise.'
    },
    tags: [{
        primary: 'Life',
        secondary: 'Hobbies'
    }]
}, {
    title: 'Grocery list',
    type: 'foo',
    author: 'Notion',
    description: {
        short: 'this is the short description',
        long: 'She was so deeply imbedded in my consciousness that for the first year of school I seem to have believed that each of my teachers was my mother in disguise.'
    },
    tags: [{
        primary: 'Home',
        secondary: 'Food'
    }]
}, {
    title: 'Lesson Plan',
    type: 'foo',
    author: 'Notion',
    description: {
        short: 'this is the short description',
        long: 'She was so deeply imbedded in my consciousness that for the first year of school I seem to have believed that each of my teachers was my mother in disguise.'
    },
    tags: [{
        primary: 'Education',
        secondary: 'Teachers'
    }]
}, {
    title: 'Design review',
    type: 'foo',
    author: 'Notion',
    description: {
        short: 'this is the short description',
        long: 'She was so deeply imbedded in my consciousness that for the first year of school I seem to have believed that each of my teachers was my mother in disguise.'
    },
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

export default data;
