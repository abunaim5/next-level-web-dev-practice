//* access >> modify
//* modifiers: readonly, private and protected

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

    addAccBalance(balance: number) {
        return this.accBalance = this.accBalance + balance;
    };
};

const user1 = new BankAccount(111, 'Elon', 1000);
console.log(user1.addAccBalance(50));


class StudentAccount extends BankAccount {
    constructor(userId: number, userName: string, accBalance: number) {
        super(userId, userName, accBalance);

        //* now we access account balance in this instance
        // this.accBalance
    }
}