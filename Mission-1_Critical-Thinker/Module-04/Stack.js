export default class Stack {
    constructor() {
        this.items = [];
    }

    //* O(1)
    push(value) {
        return this.items.push(value);
    }

    //* O(1)
    pop() {
        if(this.isEmpty()) return undefined;

        return this.items.pop();
    }

    //* O(1)
    peek() {
        if (this.isEmpty()) return undefined;

        return this.items[this.items.length - 1]
    }

    //* O(1)
    isEmpty() {
        return this.items.length === 0;
    }

    //* O(n)
    print() {
        console.log(this.items.slice().reverse().join(' > '));
    }
}

// const stack = new Stack();

// stack.push(10)
// stack.push(15)

// stack.print();

// console.log(stack.peek())

// stack.pop()
// stack.print();