//* static in OOP

class Counter {
    // value: number = 0
    static value: number = 0; // this called premium member in class

    static increment() {
        // this use the dynamic memory
        // return (this.value = this.value + 1);
        //* if use static
        return (Counter.value = Counter.value + 1);
    };

    static decrement() {
        // this use the dynamic memory
        // return (this.value = this.value - 1);

        return (Counter.value = Counter.value - 1);
    };
};

//* if we don't use static then every instance make separate memory location
// const instance1 = new Counter();
// console.log(instance1.increment()); // 1
// console.log(instance1.increment()); // 2
// console.log(instance1.increment()); // 3

// const instance2 = new Counter();
// console.log(instance2.increment()); // 1
// console.log(instance2.increment()); // 2
// console.log(instance2.increment()); // 3

//* if we use static then it point one memory location
// const instance1 = new Counter();
// console.log(instance1.increment()); // 1
// console.log(instance1.increment()); // 2
// console.log(instance1.increment()); // 3

// const instance2 = new Counter();
// console.log(instance2.increment()); // 4
// console.log(instance2.increment()); // 5
// console.log(instance2.increment()); // 6

//* we can use like this with static function
console.log(Counter.increment()); // 1
console.log(Counter.increment()); // 2
console.log(Counter.increment()); // 3
console.log(Counter.increment()); // 4