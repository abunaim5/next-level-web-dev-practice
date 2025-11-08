//* Stateless vs Stateful

// const counter = (num) => {
//     let count = 0;

//     count += num;

//     return count;
// };

// console.log(counter(5));
// console.log(counter(2));

const counter = {
    count: 0,

    add(num) {
        this.count += num;
    },

    print() {
        console.log(this.count);
    }
}

counter.add(5);
counter.add(2);

counter.print();