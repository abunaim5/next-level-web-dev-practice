//* A queue in JavaScript, like in computer science generally, is a linear data structure that follows the First-In, First-Out (FIFO) principle. This means the first element added to the queue is the first one to be removed.
//* Array implementation

class Queue {
    constructor() {
        this.items = [];
    }

    //* O(1)
    enqueue(value) {
        this.items.push(value)
    }

    //* O(n)
    dequeue() {
        if(this.isEmpty()) {
            return undefined;
        }

        return this.items.shift();
    }

    //* O(1)
    peek() {
        if(this.isEmpty()) {
            return undefined;
        }

        return this.items[0]
    }

    //* O(1)
    isEmpty() {
        return this.items.length === 0;
    }

    //* O(n)
    print() {
        console.log('Start ->', this.items.join(' -> '), '-> End');
    }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print();

queue.dequeue();
queue.print();