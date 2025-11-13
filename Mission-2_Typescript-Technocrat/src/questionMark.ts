//* ? ternary operator : decision making
//* ?? nullish coalescing operator (null / Undefined)
//* ?. optional chaining

type DecMakEligibility = (value: number) => string;

const eligibility: DecMakEligibility = (age) => {
    // if (age >= 21) {
    //     return 'You Are Eligible!'
    // } else return 'You Are Not Eligible!';

    //* We can define it with ternary operator
    const res = age >= 21 ? 'You are eligible' : 'You are not eligible';
    return res;
};

// console.log(eligibility(25));

//* nullish coalescing operator only works if the value is undefined or null
const userTheme = undefined;
const userTheme2 = '';

const res = userTheme ?? 'Light theme';
const res2 = userTheme2 ?? 'Light theme'; //* in this scenario nullish coalescing operator not working

//* optional chaining
const user: {
    id: number;
    name: string;
    email: string;
    other: {
        phone: string;
        address: {
            city: string;
            country: string;
            postalCode?: number;
        }
    }
} = {
    id: 134,
    name: 'Naim',
    email: 'naim@mail.com',
    other: {
        phone: '01755666',
        address: {
            city: 'Mymensingh',
            country: 'Bangladesh'
        }
    }
};

const userPostalCode = user?.other?.address?.postalCode
console.log(userPostalCode)