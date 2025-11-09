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

    //* O(1)
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

        return this;
    }

    //* O(1)
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

        //* if we want to implement chaining for methods then we return this (means return full method)
        return this;
    }

    //* best case = O(1)
    //* worst case = O(n)
    insert(index, value) {
        if (index < 0 || index > this.length) {
            console.error('Index is the out of the bound');
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
        //* find leading node
        const leadingNode = this._traverseToIndex(index - 1);
        const holdingNode = leadingNode.next;

        const newNode = new Node(value);
        leadingNode.next = newNode;
        newNode.next = holdingNode;
    }

    //* best case = O(1)
    //* worst case = O(n)
    remove(index) {
        if (index < 0 || index >= this.length) {
            console.error('Index is the out of the bound');
            return undefined;
        }

        //* if removed is in the start
        if (index === 0) {
            const removedItem = this.head.value;
            this.head = this.head.next;

            if (this.length === 1) {
                this.tail = null;
            }

            this.length--
            return removedItem;
        }

        //* if removed is in the middle
        const leadingNode = this._traverseToIndex(index - 1);
        const nodeToRemove = leadingNode.next;
        leadingNode.next = nodeToRemove.next;

        //* if removed is in the end
        if (leadingNode.next === null) {
            this.tail = leadingNode;
        }

        this.length--;
        return nodeToRemove.value;
    }

    isEmpty() {
        return this.head === null;
    }

    //* private helper method. we don't call this function out of the class. thats why we define this function with underscore
    _traverseToIndex(index) {
        let currentNode = this.head;
        let count = 0;

        //* O(n)
        while (count !== index) {
            currentNode = currentNode.next;
            count++;
        }

        return currentNode;
    }

    print() {
        const arr = [];
        let currentNode = this.head;

        while (currentNode !== null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(this.length);
        console.log(arr.join(' -> '), '-> null')
    }
}

const linkedList = new LinkedList();

linkedList.append('A'); //* 0
linkedList.append('B'); //* 1
linkedList.append('C'); //* 2
linkedList.append('D'); //* 3
console.log(this.length);

linkedList.remove(4);

linkedList.print();