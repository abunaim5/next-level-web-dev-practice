//* Object destructuring
const user = {
    id: 13,
    name: 'Naim',
    email: 'naim@mail.com',
    other: {
        city: 'Mymensingh',
        address: 'Mymensingh, Bangladesh',
    }
};

const { name, other: { address } } = user;
// console.log(
//     `Name: ${name}
//     Address: ${address}`
// );

//* Array destructuring
const friends = ['Rehim', 'Karim', 'Jalal', 'Kamal'];

const [, , bestFriend] = friends;

console.log(bestFriend);