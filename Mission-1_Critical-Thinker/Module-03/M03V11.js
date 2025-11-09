//* Queue implementation with linked list

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
};

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    //* O(1)
    enqueue(value) {
        const newNode = new Node(value);

        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;

        return this;
    }

    //* O(1)
    dequeue() {
        if (this.head === null) {
            return undefined;
        }

        const nodeToRemove = this.head;
        if (this.head === this.tail) {
            this.tail = null;
        }

        this.head = nodeToRemove.next;

        this.length--;

        return nodeToRemove.value;
    }

    //* O(1)
    peek() {
        return this.head ? this.head.value : undefined;
    }

    //* O(1)
    size() {
        return this.length;
    }

    //* O(1)
    isEmpty() {
        return this.head === null;
    }

    //* O(n)
    print() {
        let currentNode = this.head;
        const output = [];

        while (currentNode !== null) {
            output.push(currentNode.value);
            currentNode = currentNode.next;
        }

        console.log(output.join(' -> '), '-> null');
    }
};

const queue = new Queue();

queue.enqueue(5).enqueue(10).enqueue(15);

queue.print();

queue.dequeue();

queue.print();