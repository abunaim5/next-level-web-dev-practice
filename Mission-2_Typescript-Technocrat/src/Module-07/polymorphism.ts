//* Polymorphism: the 2nd pillar of OOP
//* Polymorphism in OOP is the ability of an object, method, or variable to take on many forms, allowing for different behaviors from a single interface

//* same method but gives different behavior in every instance
class Person {
    getSleep(): string {
        return `I am a normal person and I sleep 10 hours a day.`;
    };
};

class Student extends Person {
    getSleep(): string {
        return `I am a student and I sleep 8 hours a day.`
    };
};

class NextLevelWebDev extends Person {
    getSleep(): string {
        return `I am a next level we dev and I sleep 6 hours a day.`
    };
};

const getPersonSleepingInfo = (param: Person) => {
    console.log(param.getSleep());
}

const person1 = new Person();
const person2 = new Student();
const person3 = new NextLevelWebDev();
getPersonSleepingInfo(person1);

class Shape {
    getArea() {
        return 0;
    };
};

class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
        super();
        this.radius = radius;
    };

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    };
};

class Rectangle extends Shape {
    height: number;
    width: number;

    constructor(height: number, width: number) {
        super();
        this.height = height;
        this.width = width;
    };

    getArea(): number {
        return this.height * this.width;
    };
};

const getArea = (instance: Shape) => {
    return instance.getArea();
};

const instance1 = new Shape();
const instance2 = new Circle(30);
const instance3 = new Rectangle(30, 40);

console.log(getArea(instance1));
console.log(getArea(instance2));
console.log(getArea(instance3));