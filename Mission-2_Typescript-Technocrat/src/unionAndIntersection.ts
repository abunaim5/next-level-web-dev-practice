//* Union Type in TypeScript (|)

type UserRole = 'admin' | 'user';

const dashboard = (role: UserRole) => {
    if (role === 'admin') {
        return 'Admin Dashboard'
    } else if (role === 'user') {
        return 'User Dashboard'
    } else return 'Access Denied';
};

// console.log(dashboard('user'));

//* Intersection Type in TypeScript (&)

type Employee = {
    id: number;
    name: string;
    email: string;
};

type Manager = {
    designation: string;
    teamSize: number;
};

type EmployeeManager = Employee & Manager; // we can user intersection to define two or more types together

const ElonMask: EmployeeManager = {
    id: 123,
    name: 'Elon Mask',
    email: 'elonmask@mail.com',
    designation: 'Manager',
    teamSize: 1000
};