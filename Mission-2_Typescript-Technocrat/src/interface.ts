type User = {
    name: string;
    age: number;
};

type Role = {
    role: 'admin' | 'user';
};

type UserWithRole = User & Role;

const user: UserWithRole = {
    name: 'Naim',
    age: 27,
    role: 'admin'
}

//* Interface works only non primitive data types like (object, array, function)
interface IUser {
    name: string;
    age: number;
};

//* We can extend the interface type
interface IUserWithRole extends IUser {
    role: 'admin' | 'user'
};

const IUser: IUserWithRole = {
    name: 'Elon',
    age: 37,
    role: 'admin'
};

//* Array type define with type Alias
type FriendsType = string[];

const friends: FriendsType = ['Rahim', 'Karim', 'Nasim'];

//* Array type define with interface
interface IFriends {
    [index: number]: string;
};

const iFriends: IFriends = ['Elom', 'Mark'];

//* Functions type define with type Alias
type AddFunc = (num1: number, num2: number) => number;

const add: AddFunc = (num1, num2) => {
    return num1 * num2;
};

//* Functions type define with Interface
interface IAddFunc {
    (num1: number, num2: number): number;
};

const iAdd: IAddFunc = (num1, num2) => {
    return num1 * num2;
};
