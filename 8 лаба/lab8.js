// Объекты и массивы
let user = {
    name: 'Masha',
    age: 21
};

let numbers = [1, 2, 3];

let user1 = {
    name: 'Masha',
    age: 23,
    location: {
        city: 'Minsk',
        country: 'Belarus'
    }
};

let user2 = {
    name: 'Masha',
    age: 28,
    skills: ["HTML", "CSS", "JavaScript", "React"]
};

const array = [
    {id: 1, name: 'Vasiliy', group: 10}, 
    {id: 2, name: 'Ivan', group: 11},
    {id: 3, name: 'Masha', group: 12},
    {id: 4, name: 'Petya', group: 10},
    {id: 5, name: 'Kiryha', group: 11},
];

let user4 = {
    name: 'Masha',
    age: 19,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        exams: {
            maths: true,
            programming: false
        }
    }
};

let user5 = {
    name: 'Masha',
    age: 22,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10,
        },
        exams: [
            { maths: true, mark: 8},
            { programming: true, mark: 4},
        ]
    }
};

let user6 = {
    name: 'Masha',
    age: 21,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10,
        },
        exams: [
            { 
                maths: true,
                mark: 8,
                professor: {
                    name: 'Ivan Ivanov',
                    degree: 'PhD'
                }
            },
            { 
                programming: true,
                mark: 10,
                professor: {
                    name: 'Petr Petrov',
                    degree: 'PhD'
                }
            },
        ]
    }
};

let user7 = {
    name: 'Masha',
    age: 20,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10,
        },
        exams: [
            { 
                maths: true,
                mark: 8,
                professor: {
                    name: 'Ivan Petrov',
                    degree: 'PhD',
                    articles: [
                        {title: "About HTML", pagesNumber: 3},
                        {title: "About CSS", pagesNumber: 5},
                        {title: "About JavaScript", pagesNumber: 1},
                    ]
                }
            },
            { 
                programming: true,
                mark: 10,
                professor: {
                    name: 'Petr Ivanov',
                    degree: 'PhD',
                    articles: [
                        {title: "About HTML", pagesNumber: 3},
                        {title: "About CSS", pagesNumber: 5},
                        {title: "About JavaScript", pagesNumber: 1},
                    ]
                }
            },
        ]
    }
};

let store = {
    state: {
        posts: [
            {id: 1, message: 'Hi', likesCount: 12},
            {id: 2, message: 'By', likesCount: 1},
        ],
        newPostText: 'About me',
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Valera'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sasha'},
            {id: 4, name: 'Victor'},
        ],
        messages: [
            {id: 1, message: 'hi'},
            {id: 2, message: 'hi hi'},
            {id: 3, message: 'hi hi hi'},
        ],
    },
    sidebar: [],
};

// Глубокое копирование всех объектов и массивов
let userCopy = {...user};
let numbersCopy = [...numbers]; // Исправлено на правильное глубокое копирование массива
let user1Copy = {...user1, location: {...user1.location}};
let user2Copy = {...user2, skills: [...user2.skills]};
let arrayCopy = array.map(item => ({...item}));
let user4Copy = {...user4, studies: {...user4.studies, exams: {...user4.studies.exams}}};

let user5Copy = {...user5, 
    studies: {...user5.studies, 
        department: {...user5.studies.department}, 
        exams: [...user5.studies.exams.map(exam => ({...exam}))]}};

let user6Copy = {...user6,
     studies: {...user6.studies, 
        department: {...user6.studies.department}, 
        exams: [...user6.studies.exams.map(exam => ({...exam, 
            professor: {...exam.professor}}))]
        }};

let user7Copy = {
    ...user7,
    studies: {
        ...user7.studies,
        department: {...user7.studies.department},
        exams: [...user7.studies.exams.map(exam => ({
            ...exam,
            professor: {
                ...exam.professor,
                articles: [...exam.professor.articles.map(article => ({...article}))]
            }
        }))]
    }
}; 

let storeCopy = {
    ...store,
    state: {
        ...store.state,
        posts: [...store.state.posts.map(post => ({...post})),], 
        newPostText: store.state.newPostText, // Добавлен для завершенности
    },
    dialogsPage: {
        ...store.dialogsPage,
        dialogs: [...store.dialogsPage.dialogs.map(dialog => ({...dialog}))], 
        messages: [...store.dialogsPage.messages.map(message => ({...message}))], 
    },
    sidebar: [...store.sidebar],
};

// 2. Обратитесь к копии объекта user5 и измените значение свойства group на 12, а оценку по программированию измените на 10.
let user5Copy1 = {...user5Copy}; // Используем уже скопированный user5
user5Copy1.studies.department.group = 12;
user5Copy1.studies.exams[1].mark = 10; 

// 3. Обратитесь к копии объекта user6 и измените имя преподавателя.
let user6Copy1 = {...user6Copy}; // Используем уже скопированный user6
user6Copy1.studies.exams[0].professor.name = 'New Professor Name'; 

// 4. Обратитесь к копии объекта user7 и измените количество страниц на 3 для статьи “About CSS” преподавателя Petr Ivanov.
let user7Copy1 = {...user7Copy}; 
const cssArticle = user7Copy1.studies.exams.find(exam => exam.professor.name === 'Petr Ivanov')
    .professor.articles.find(article => article.title === 'About CSS');
if (cssArticle) {
    cssArticle.pagesNumber = 3;
}

// 5. Замените все сообщения в объекте store на “Hello”.
let storeCopy1 = {...storeCopy}; 
storeCopy1.state.posts.forEach(post => post.message = 'Hello');
storeCopy1.dialogsPage.messages.forEach(message => message.message = 'Hello');

console.log(user5Copy1);
console.log(user6Copy1);
console.log(user7Copy1);
console.log(storeCopy1);