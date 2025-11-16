//* Encapsulation: the 4th pillar of OOP
//* Encapsulation is a fundamental concept in OOP that combines data (attributes) and methods that work with that data into a single unit known as a class. This protective layer around the data maintains its integrity and prevents unauthorized access.

class BankAccount {
    readonly userId: number; // we can't modify this property in readonly mode
    public userName: string;
    // private accBalance: number; // we can't access this property in public anymore only access in this class

    //* if need to access account balance in another instance then need to use protected access modifier
    //* Encapsulated property
    protected accBalance: number;

    constructor(userId: number, userName: string, accBalance: number) {
        this.userId = userId;
        this.userName = userName;
        this.accBalance = accBalance;
    };

    //* Encapsulated method
    private addAccBalance(balance: number) {
        return this.accBalance = this.accBalance + balance;
    };

    callHiddenMethod(amount: number) {
        this.addAccBalance(amount)
    }
};

const user1 = new BankAccount(111, 'Elon', 1000);
console.log(user1.callHiddenMethod(50));


class StudentAccount extends BankAccount {
    constructor(userId: number, userName: string, accBalance: number) {
        super(userId, userName, accBalance);

        //* now we access account balance in this instance
        // this.accBalance
    }
}