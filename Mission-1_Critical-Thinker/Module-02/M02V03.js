const numbers = [100, 30, 50, 25, 1, 5, 45, 10];
const fruits = ['Cherry', 'apple', 'Banana', 'date'];

// fruits.sort(); // this is default Alphabetic compare method

// this method ignore the default compare
fruits.sort((a, b) => a.localeCompare(b));

// const sortedNumber = numbers.sort((a, b) => a - b);

// nested array flat
const arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

// const flatArr = arr.flat(); // it flap one layer
// const flatArr = arr.flat(3); // we can define layers
const flatArr = arr.flat(Infinity); // we can define Infinity when we don't know how many nested array are here

const tagsFromBlogs = [
    ['react', 'javascript', 'html', 'css'],
    ['nextjs', 'prisma', 'react', 'typescript'],
    ['node', 'mongodb', 'prisma', 'express']
];


// Set method removes duplication
// const uniqueTags = new Set(tagsFromBlogs.flat());

// we can convert it this new array
const uniqueTags = [...new Set(tagsFromBlogs.flat())];

console.log(uniqueTags);