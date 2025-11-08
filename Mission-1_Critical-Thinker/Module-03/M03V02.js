// what is javascript closure
// const createCounter = () => {
//     let count = 0;

//     return (num) => {
//         count += num;

//         return count;
//     }
// }

// const counter = createCounter();

// console.log(counter(5))
// console.log(counter(2))

// class constructor reproducible
// to point object scope properties we use this keyword
class Counter {
    constructor(count) {
        this.count = count;
    }

    add(num) {
        this.count += num;
    }

    print() {
        console.log(this.count);
    }
};

const counter1 = new Counter(0);

counter1.add(5);
counter1.add(2);
counter1.print();

const counter2 = new Counter(9);

counter2.add(7);
counter2.add(3);
counter2.print();