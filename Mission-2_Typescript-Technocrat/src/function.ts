//* functions in typescript
function addNormal(num1: number, num2: number): number {
    return num1 + num2;
};

const addArrow = (num1: number, num2: number): number => num1 + num2;

// object => function => method
// if we define a func in an object the it called a method
const user = {
    name: 'Naim',
    balance: 0,
    addBalance(value: number): number {
        const newBalance = this.balance + value;
        return newBalance;
    }
}

user.addBalance(500000);

const arr: number[] = [1, 3, 4];

const square = arr.map((elem: number): number => elem * elem);
console.log(square);