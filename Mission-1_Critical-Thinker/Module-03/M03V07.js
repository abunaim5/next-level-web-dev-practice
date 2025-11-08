class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
};

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value) {
        const newNode = new Node(value);

        // if linked list is empty
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // if the linked list is not empty
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    isEmpty() {
        return this.head === null;
    }

    print() {
        let currentNode = this.head;
        const arr = [];

        while (currentNode !== null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }

        console.log(arr.join(' -> '), '-> null');
    }
}

const linkedList = new LinkedList();

linkedList.append(10);
linkedList.append(20);
linkedList.append(30);

linkedList.print();