//* primitive types
//* nullable type in typescript

const getUsers = (input: string | null) => {
    if (input) {
        console.log(`From DB: ${input}`)
    } else console.log('From DB: All users');
};

// getUsers('Naim');
// getUsers(null);

//* unknown type in typescript
//* if the user input is unknown then we can use unknown type in typescript

const discounter = (input: unknown) => {
    const res = typeof input === 'number' ? (input * 0.1) :
        typeof input === 'string' ? (Number(input.split(' ')[0]) * 0.1) :
            'Wrong input';

    return res;
};

console.log(discounter(500))
console.log(discounter('500 Tk'));
console.log(discounter(null));

//* never type in typescript
//* if a function never return anything then this func return type is never

const throwError = (msg: string): never => {
    throw new Error(msg);
};

throwError('Invalid input');