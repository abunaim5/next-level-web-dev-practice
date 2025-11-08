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

        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    prepend(value) {
        const newNode = new Node(value);

        // If the linked list is empty
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // If the linked list is not empty
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) {
            console.error('Index is the out of bound');
            return undefined;
        }

        // if the insert is in the start
        if (index === 0) {
            return this.prepend(value);
        }

        // if the insert is in the end
        if (index === this.length) {
            return this.append(value);
        }

        // if the insert is in the middle
        // find the leading node

        let count = 0;
        let leadingNode = this.head;

        while (count !== index - 1) {
            leadingNode = leadingNode.next;
            count++;
        }
        console.log(leadingNode);


    }

    isEmpty() {
        return this.head === null;
    }

    print() {
        let currentNode = this.head;
        // console.log(currentNode)
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
linkedList.append(15);
linkedList.append(20);

linkedList.prepend(25);
linkedList.prepend(30);
linkedList.prepend(35);

linkedList.insert(2, 27);

linkedList.print();