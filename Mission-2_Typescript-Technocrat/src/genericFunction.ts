//* generics with functions

//* normal functions
const createArrWithStr = (value: string) => [value];
const createArrWithNumb = (value: number) => [value];
const createArrWithBool = (value: boolean) => [value];
const createArrWithObj = (value: { id: number, name: string }) => [value];

createArrWithStr('A')
createArrWithNumb(123)
createArrWithBool(true);
createArrWithObj({ id: 12, name: 'Elon' });

//* We can crate generic function to reuse
const createArrWithGeneric = <T>(value: T) => [value];

const arrStr = createArrWithGeneric('Elon Mask') as string[];
const arrNumb = createArrWithGeneric(123);
const arrBool = createArrWithGeneric(false);
const arrObj = createArrWithGeneric({id: 123, name: 'elon'});

//* generic with tuple
const createTupleArrWithGeneric = <X, Y>(value1: X, value2: Y) => [value1, value2]