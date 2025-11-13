//* array, object

const bazarList = ['tomato', 'banana', 'apple', 'milk'] // typescript implicitly infer the type of this array
const bazarList2: string[] = ['tomato', 'banana', 'apple', 'milk'] // we can define explicitly the type of this array

const bazarList3 = ['tomato', 1, 'banana', 2, 'apple', 2, 'milk', 3] // typescript use implicit term
const bazarList4: (string | number)[] = ['tomato', 1, 'banana', 2, 'apple', 2, 'milk', 3] // we can use explicit term
// bazarList3.push(true); // we can't assign boolean value
// bazarList4.push(true); // we can't assign boolean value

//* tuple type in typescript
let nameAndRoll: [string, number] = ['Naim', 79] // this is a tuple type array

// let destination: [string, string, number] = ['Dhaka', 'Chattogram', 5, 150] //* Type '[string, string, number, number]' is not assignable to type '[string, string, number]'

//* reference type: object
const user: {
    organization: 'programming hero'; // value = type: literal types
    firstName: string;
    middleName?: string; // optional type
    lastName: string;
    isMarried: boolean;
} = {
    organization: 'programming hero',
    firstName: 'Abu',
    lastName: 'Naim',
    isMarried: false
}

// user.organization = 'programming hero xyz'; //* Type '"programming hero xyz"' is not assignable to type '"programming hero"'

const user2: {
    readonly organization: string; // access modifier
    firstName: string;
    middleName?: string; // optional type
    lastName: string;
    isMarried: boolean;
} = {
    organization: 'programming hero',
    firstName: 'Abu',
    lastName: 'Naim',
    isMarried: false
}

// user2.organization = 'programming hero xyz'; //* Cannot assign to 'organization' because it is a read-only property