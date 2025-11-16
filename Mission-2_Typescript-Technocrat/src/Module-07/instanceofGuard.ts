//* OOP: instanceof guard or type narrowing
class Person {
    name: string;
    
    constructor(name: string) {
        this.name = name;
    };

    getSleep(numOfHours: number) {
        console.log(`This is ${this.name} sleeping ${numOfHours} hours a day.`)
    };
};

class Student extends Person {
    constructor(name: string) {
        super(name);
    };

    doStudy(numOfHours: number) {
        console.log(`This is ${this.name} studying ${numOfHours} hours a day`);
    }
}

class Teacher extends Person {
    constructor(name: string) {
        super(name);
    };

    takeClass(numOfHours: number) {
        console.log(`This is ${this.name} taking class ${numOfHours} hours a day`);
    };
};

const isStudent = (user: Person) => user instanceof Student;
const isTeacher = (user: Person) => user instanceof Teacher;

const getUserInfo = (user: Person) => {
    if (isStudent(user)) {
        user.doStudy(10);
    } else if (isTeacher(user)) {
        user.takeClass(5);
    } else user.getSleep(8);
};

const student1 = new Student('Fahim');
const teacher1 = new Teacher('Elon');
const person1 = new Person('Jucker');

getUserInfo(student1);
getUserInfo(teacher1);
getUserInfo(person1);