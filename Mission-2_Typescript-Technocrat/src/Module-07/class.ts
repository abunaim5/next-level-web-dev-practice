// class Friends {
//     constructor(name: string, city: string) {
//         this.name = name;
//         this.city = city;
//     }

//     name: string;
//     city: string;

//     introduceMyFriend() {
//         console.log(`${this.name} is my friend. He lives in ${this.city}.`);
//     }
// };

//* We can define with perimeter properties for clean code using public keyword

class Friends {
    constructor(public name: string, public city: string) { }; // typescript automatically define this property and value

    introduceMyFriend() {
        console.log(`${this.name} is my friend. He lives in ${this.city}.`);
    }
}

const friend1 = new Friends('Fahim', 'Mymensingh');
const friend2 = new Friends('Elon', 'New York');
friend1.introduceMyFriend();
friend2.introduceMyFriend();