//* Primitive Data Types

//* JavaScript - TypeScript
//* JS & TS: string, number, boolean, undefined, null
//* TS: never, unknown, void

let userName1 = 'Naim';
// userName1 = 134; //* Type 'number' is not assignable to type 'string'. TypeScript implicitly get the type

let userName2: string = 'Naim'; //* We can define the data types explicitly.
// userName2 = 134; //* Type 'number' is not assignable to type 'string'.

let userId: number = 123;
userId = 456; //* we can't reassign it with string or boolean type data.

let x; //* x is any. we can reassign with any type of data.

let y: undefined = undefined;
// y = 5 //* Type '5' is not assignable to type 'undefined'.


console.log(userName1);