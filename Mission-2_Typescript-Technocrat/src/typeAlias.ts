type UserTypes = {
    id: number;
    name: string;
    gender: 'male' | 'female';
    other: {
        address: {
            city: string;
            zip: number;
        };
        isAdmin: boolean;
    };
};

const user: UserTypes = {
    id: 134,
    name: 'Naim',
    gender: 'male',
    other: {
        address: {
            city: 'Mymensingh',
            zip: 2200
        },
        isAdmin: true
    }
}

const user2: UserTypes = {
    id: 134,
    name: 'Aysha',
    gender: 'female',
    other: {
        address: {
            city: 'Dhaka',
            zip: 3100
        },
        isAdmin: false
    }
}

type IsAdmin = boolean;
const isAdmin: IsAdmin = true;

//* type alias in function
type AddFunc = (num1: number, num2: number) => number;

const add: AddFunc = (num1, num2) => {
    return num1 + num2;
}