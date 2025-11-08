class Node {
    constructor(value) {
        this.value = value;
        this.next = null
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

        //* if the linked list is empty
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            //* if the linked list is not empty
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;

        //* if we want to implement chaining for methods then we return this (means return full method)
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);

        //* if the linked list is empty
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            //* if the linked list is not empty
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;

        return this;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) {
            console.error('Index is out of the bound');
            return undefined;
        }

        //* if the insert is in the start
        if (index === 0) {
            return this.prepend(value);
        }

        //* if the insert is in the end
        if (index === this.length) {
            return this.append(value);
        }

        //* if the insert is in the middle
        //* find the leading node
        let leadingNode = this._traverseToIndex(index - 1);
        const holdingNode = leadingNode.next;

        const newNode = new Node(value);
        leadingNode.next = newNode;
        newNode.next = holdingNode;

        this.length++;

        console.log(leadingNode);
    }

    isEmpty() {
        return this.head === null;
    }

    //* private helper method. we don't call this function out of the class. thats why we define this function with underscore
    _traverseToIndex(index) {
        let count = 0;
        let currentNode = this.head;

        while (count !== index) {
            currentNode = currentNode.next;
            count++;
        }

        return currentNode;
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

//* chaining method
linkedList.append(1).append(2).append(3);

linkedList.prepend(10);
linkedList.prepend(15);
linkedList.prepend(20);

linkedList.insert(2, 13)

linkedList.print();