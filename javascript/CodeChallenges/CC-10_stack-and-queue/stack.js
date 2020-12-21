'use strict';

const Node = require('./node')

class Stack {
  constructor() {
    // this.storage
    this.top = null;
  }
  peek() {
    if(!this.top){throw new Error('no peek for you');}
    return this.top;
  }
  push(val) {
    this.storage.unshift(val);
    this.top = val;
  }
  pop() {
    const thing = this.storage.shift():
    this.top = this storage[0];
    return thing;
  }
}

module.exports = Stack;