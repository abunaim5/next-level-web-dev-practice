//* Inheritance: The first pillar of Object Oriented Programming (OOP).
//* Inheritance in object-oriented programming (OOP) is a mechanism where a new class (child or derived class) acquires the properties and methods of an existing class (parent or base class).
//* Inheritance means creating new classes based on existing ones. A class that inherits from another class can reuse the methods and fields of that class.

class People {
    constructor(
        name: string,
        age: number,
        address: {
            city: string
            zip: number
        }
    ) {
        this.name = name;
        this.age = age;
        this.address = {
            city: address.city,
            zip: address.zip
        }
    };

    name: string;
    age: number;
    address: {
        city: string;
        zip: number;
    };

    doExercise() {
        return `${this.name} does exercise for an hour every day.`
    };
};

//* We can inherit like this
class Student extends People { };

const student1 = new Student('Fahim', 23, { city: 'Mymensingh', zip: 2200 });

console.log(student1.doExercise());

//* if we create a new class with extra property then we need to call super(). super() is the constructor of the parent class.
class Teacher extends People {
    constructor(
        name: string,
        age: number,
        address: {
            city: string,
            zip: number
        },
        designation: string
    ) {
        super(name, age, address);

        this.designation = designation;
    };

    designation: string;

    takingClass(subject: string) {
        return `Our ${this.designation} ${this.name} is teaching a ${subject} class.`;
    };
};

const teacher = new Teacher('Naim', 27, {city: 'Mymensingh', zip: 2200}, 'senior teacher')

console.log(teacher.takingClass('TypeScript'))