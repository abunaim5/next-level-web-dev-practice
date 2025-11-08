// Some
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const hasOddNumber = numbers.some(number => number % 2 != 0);

const currentUserRoles = ['user', 'editor'];
const featureAccessRoles = ['admin', 'manager'];

const canAccess = currentUserRoles.some(role => featureAccessRoles.includes(role));

// Array.from()
// const arr = Array.from({length: 5}).fill(5);
// const arr = Array.from({length: 5}, (_, i) => i);
const arr = Array.from(numbers, (value, i) => value * 2);

const range = (start, stop, steps) => Array.from(
    { length: Math.ceil((stop - start) / steps) },
    (_, i) => (start + i) * steps
);

console.log(range(0, 15, 3));