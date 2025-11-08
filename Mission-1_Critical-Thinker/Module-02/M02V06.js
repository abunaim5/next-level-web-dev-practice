//* Generate a lookup table

//? Input
const postsArray = [
    { id: "p-101", title: "Intro to SQL", author: "Alex" },
    { id: "p-102", title: "Data Structures in JS", author: "Beth" },
    { id: "p-103", title: "Understanding Reduce", author: "Chris" },
    { id: "p-104", title: "CSS Grid Tricks", author: "Alex" },
];

//? Output
// {
//   "p-101": { "id": "p-101", "title": "Intro to SQL", "author": "Alex" },
//   "p-102": { "id": "p-102", "title": "Data Structures in JS", "author": "Beth" },
//   "p-103": { "id": "p-103", "title": "Understanding Reduce", "author": "Chris" },
//   "p-104": { "id": "p-104", "title": "CSS Grid Tricks", "author": "Alex" }
// }

const lockupTable = postsArray.reduce((table, post) => {
    table[post.id] = post;

    return table;
}, {});

// this method runs with O(n)
//! const post = postsArray.find(post => post.id === 'p-104');

// this method runs with O(1) constant
const post = lockupTable['p-103'];

// we can find all post
for (let post in lockupTable) {
    console.log(lockupTable[post]);
}

// console.log(post);