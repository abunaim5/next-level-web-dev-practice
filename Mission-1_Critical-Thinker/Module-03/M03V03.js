//* The basic concept of a stack in JavaScript (and computer science in general) is a linear data structure that follows the Last-In, First-Out (LIFO) principle. This means the last element added to the stack is the first one to be removed

class Stack {
    constructor() {
        this.items = [];
    }

    //* O(1)
    push(value) {
        this.items.push(value);
    }

    //* O(1)
    pop() {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.items.pop();
    }

    //* O(1)
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.items[this.items.length - 1];
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

const stack = new Stack();

stack.push(5);
stack.push(10);
stack.push(15);

stack.print();
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());