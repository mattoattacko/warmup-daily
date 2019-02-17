//Iterate a linked list, printing out the values

'use strict';

//Are we using the same thing here?
const linkedList = require('../practice-linked-list.js');

function traverse() {
    let LL = new linkedList();
    let values = [];
    let current = LL.this.head;

    while(current) {
        values.push(current.value);
        current = current.next;
    }
    return values
};