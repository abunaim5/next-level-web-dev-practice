//* Generics type declaration means dynamically generalized
//* We can receive dynamic types using generics. We can reuse generic.

type GenericArray<T> = Array<T>;

// const friends: string[] = ['A', 'B', 'C'];
// const friends: Array<string> = ['A', 'B', 'C'];
const friends: GenericArray<string> = ['A', 'B', 'C'];

// const rollNumbers: number[] = [1, 2, 3];
// const rollNumbers: Array<number> = [1, 2, 3];
const rollNumbers: GenericArray<number> = [1, 2, 3];

// const isEligibleList: boolean[] = [true, false, true];
// const isEligibleList: Array<boolean> = [true, false, true];
const isEligibleList: GenericArray<boolean> = [true, false, true];

//* We can define generics type an array of object
type User = {
    name: string;
    email: string;
    age: number;
}

const users: GenericArray<User> = [
    {
        name: 'Elon',
        email: 'elon@mail.com',
        age: 37
    },
    {
        name: 'Mark',
        email: 'mark@mail.com',
        age: 36
    }
]