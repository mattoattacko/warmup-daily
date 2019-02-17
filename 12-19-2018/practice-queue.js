//Process a Queue and a Stack in the correct order

'use strict';

const linkedList = require('../practice-linked-list.js')

class Queue {
    constructor() {
        this.front = null;
        this.storage = new linkedList();
    }
    enqueue(value) {
        this.storage.prepend(value);
        this.front = this.storage.head.value;
        return this;
    }
    dequeue() {
        let dequeuedItem = this.storage.deleteFromEnd();
        return dequeuedItem;
    }
    peek() {
        let firstItem = this.storage.getFirstValue();
        return firstItem;
    }
}

module.exports = Queue;