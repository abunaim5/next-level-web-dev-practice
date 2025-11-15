//* If we sure the function return value types then we can define type explicitly. It's called type assertion or type narrowing
let anything: any;

anything = 'Naim';
anything = 999;

// (anything as number).toFixed();
// (anything as string).toLowerCase();

const kgToGramConverter = (input: string | number): string | number | undefined => {
    if (typeof input === 'number') {
        return input * 1000;
    } else if (typeof input === 'string') {
        const [value] = input.split(' ');
        return `${Number(value) * 1000}`
    }
};

const res1 = kgToGramConverter(2) as number;
const res2 = kgToGramConverter('2 kg') as string;
console.log({ res1 });
console.log({ res2 });

type CustomError = {
    message: string;
};

//* Sometimes we need to define custom types where we sure which type it is
try{}catch(err){
    console.log((err as CustomError).message);
}