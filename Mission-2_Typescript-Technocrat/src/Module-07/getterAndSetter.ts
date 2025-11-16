//* getter and setter
//* this are commonly use in OOP

class BankAccount {
    readonly userId: number; // we can't modify this property in readonly mode
    public userName: string;
    // private accBalance: number; // we can't access this property in public anymore only access in this class

    //* if need to access account balance in another instance then need to use protected access modifier
    protected accBalance: number;

    constructor(userId: number, userName: string, accBalance: number) {
        this.userId = userId;
        this.userName = userName;
        this.accBalance = accBalance;
    };

    //* set balance
    // addAccBalance(balance: number) {
    //     return this.accBalance = this.accBalance + balance;
    // };

    //* This is called setter method
    //* We can use set property to write a function. then we can set value using like object property
    set addAccBalance(amount: number) {
        this.accBalance = this.accBalance + amount;
    }

    //* get balance
    // getAccBalance() {
    //     return this.accBalance;
    // }

    //* This is called getter method
    //* We can use get property to write a function. then we can get value using like object property
    get getAccBalance() {
        return this.accBalance;
    }
};

const user1 = new BankAccount(111, 'Elon', 1000);
// user1.addAccBalance(50); // need to call function
// user1.addAccBalance(500);

// console.log(user1.getAccBalance()); // need to call function

//* if using getter and setter method then we can write like this
user1.addAccBalance = 500;
console.log(user1.getAccBalance);