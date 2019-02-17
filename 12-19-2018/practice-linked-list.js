//Iterate a linked list, printing out the values

'use strict';

//within the same?
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