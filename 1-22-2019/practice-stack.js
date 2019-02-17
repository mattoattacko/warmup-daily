// Process a Queue and a Stack in the correct order

'use strict';
//sure feels like this is the same as last time...
const Node = require('../node.js');
const LL = require('./practice-linked-list.js');

class Stack {
    constructor() {
        this.top = null;
        this.storage = new LL();
    }
    push(node) {
        this.storage.append(node);
        this.top = this.storage.tail;
    }
    pop() {
        let poppedItem = this.storage.deleteFromEnd();
        this.top = this.storage.tail;
        return poppedItem;
    }
    peek() {
        let lastItem = this.storage.getLastValue();
        return lastItem;
    }
}

module.exports = Stack;