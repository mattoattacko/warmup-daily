'use strict';

const Node = require('./node.js');

class LinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
    }

    traversal() {
        let values = [];
        let current = this.head;
        while(current) {
            values.push(current.value);
            current = current.next;
        }
        return values;
    }

    append(value) {
        let node = new Node(value);
        if (!this.head) {
          this.head = node;
          this.tail = node;
          return this; 
        }
        let current = this.head;
        while(current.next) {
          current = current.next;
        }
        current.next = node;
        this.tail = node;
        return this;
      }

      prepend(value) {
          let node = new Node(value);
          node.next =this.head;
          this.head = node;
      }

      deleteFromEnd() {
          let current = this.head;
          let previous = null;
          let lastValue = null;

          if(!this.head) {
              return 'Nothing Currently in the Linked List';
          }
          while(current.next) {
              previous = current;
              current = current.next;
          }

          current = previous;
          lastValue = current.next;
          current.next = null;
          this.tail = current;
          return lastValue;
      }

      getLastValue() {
          let current = this.head;
          while(current.next) {
              current = current.next;
          }
          return current;
        }
}

module.exports = LinkedList; 