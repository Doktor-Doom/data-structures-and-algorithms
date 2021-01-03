'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root = null;
  }
  // Pre-order: root >> left >> right
  preOrder() {
    let array = [];
    function preOrder(root) {
      if (!root) {
        return;
      }
      array.push(root.value);
      preOrder(root.left);
      preOrder(root.right);
    }
    preOrder(this.root);
    return array;
  }
  // In-order: left >> root >> right
  inOrder() {
    let array = [];
    function inOrder(root) {
      if (!root) {
        return;
      }
      inOrder(root.left);
      array.push(root.value);
      inOrder(root.right);
    }
    inOrder(this.root);
    return array;
  }
  // Post-order: left >> right >> root
  postOrder() {
    let array = [];
    function postOrder(root) {
      if (!root) {
        return;
      }
      postOrder(root.left);
      postOrder(root.right);
      array.push(root.value);
    }
    postOrder(this.root);
    return array;
  }
  // BSTree
  add(value, current = this.root) {
    if (current === null) {
      this.root = new Node(value);
      return this;
    }

    if (value >= current.value) {
      if (current.right === null) {
        current.right = new Node(value);
        return this;
      }
      return this.add(value, current.right);
    }
    else {
      if (current.left === null) {
        current.left = new Node(value);
        return this;
      }
      return this.add(value, current.left);
    }
  }
  contains(value, current = this.root) {
    while (current !== null) {
      if (current.value === value) return true;
      else if (value > current.value) current = current.right;
      else current = current.left;
    }
    return false;
  }
}

module.exports = { Node, Tree };
