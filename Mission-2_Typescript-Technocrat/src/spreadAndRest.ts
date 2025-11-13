//* spread operator
const friends: string[] = ['Rahim', 'Karim', 'Bulbul'];
const schoolFriends: string[] = ['Abid', 'Nabid', 'Mahid'];
const collageFriends: string[] = ['Jamil', 'Kamil'];

// friends.push(schoolFriends); //* Argument of type 'string[]' is not assignable to parameter of type 'string'.
friends.push(...schoolFriends); //* We can spread string type array to prevent this type error
friends.push(...collageFriends);

//* spread operator in an object
const user = {
    name: 'Naim',
    email: 'naim@mail.com'
};

const otherInfo = {
    home: 'Mymensingh, Bangladesh',
    favColor: 'Black'
};

const userInfo = { ...user, ...otherInfo };
// console.log(userInfo);

//* rest operator
const sentInvite = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`Sent invitation to ${friend}`));
}

sentInvite('Habib', 'Mahid', 'Fahim', 'Jamil', 'Labib');