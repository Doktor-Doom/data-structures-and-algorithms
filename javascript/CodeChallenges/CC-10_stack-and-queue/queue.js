'use strict';

class Queue {
  constructor() {
    // storage
    this.front = null;
    this.end = null;
    this.size = 0;
  }
  enqueue(val) {
    // O(1)
    // this.storage.push(val);
    // this.end = this.storage[this.storage.length - 1];
    
  }
  dequeue() {
    // O(n)
    return this.storage.shift();
  }
  peek() {
    // return this.storage[0];
  }
  isEmpty() {
    if (this.front === null) {
      return true;
    }
    return false;
  }
}

module.exports = Queue;