// Traverse a Binary Tree, printing out the values as you visit each node.
// Breath First
// Depth First: Pre-Order
// Depth First: In-Order
// Depth First: Post-Order


'use strict';

class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }

// Depth First: Pre-Order
    preOrder() {
        let results = [];
        let _walk = node => {
            results.push(node.value);
            if(node.left) {
                _walk(node.left);
            }
            if(node.right) {
                _walk(node.right);
            }
        };
        _walk(this.root);
        return results;
    }

// Depth First: In-Order
    inOrder() {
        let results = [];
        let _walk = node => {
            if(node.left) {
                _walk(node.left);
            }
            results.push(node.value);
            if(node.right) {
                _walk(node.right);
            }
        };
        _walk(this.root);
        return results;
    }

// Depth First: Post-Order
    postOrder() {
        let results = [];
        let _walk = node => {
            if(node.left) {
                _walk(node.left);
            }
            if(node.right) {
                _walk(node.right);
            }
            results.push(node.value);
        };
        _walk(this.root);
        return results;
    }

// Breath First
    breadthFirst() {
        let results = [];
        let nodeQueue = [];

        nodeQueue.push(this.root);

        while (nodeQueue.length) {
            let current = nodeQueue.shift();
            results.push(current.value);
            if(current.left) {
                nodeQueue.push(current.left);
            }
            if(current.right) {
                nodeQueue.push(current.right);
            }
        }
        return results;
    }
}

module.exports = BinaryTree;