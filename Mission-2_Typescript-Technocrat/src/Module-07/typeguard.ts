//* Type guard or narrowing in typescript
//* we can check types using in and typeof guard

// using type guard with typeof
type Alphanumeric = string | number;

const add = (num1: Alphanumeric, num2: Alphanumeric) => {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    } else {
        return Number(num1.toString()) + Number(num2.toString());
    };
};

console.log(add(2, '2'));

//* using type guard with in
type NormalUser = {
    name: string;
};

type AdminUser = {
    name: string;
    role: string;
};

const getUserInfo = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
        return `This is ${user.name} and his role is ${user.role}.`;
    } else return `This is ${user.name}.`;
};

console.log(getUserInfo({name: 'Elon', role: 'Admin'}));
