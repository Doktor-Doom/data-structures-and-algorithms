'use strict';

class Stack {
  constructor() {
    this.storage
    this.top = null;
  }
  peek() {
    if(!this.top){throw new Error('no peek for you');}
    return this.top;
  }
  push(thing) {
    this.storage.unshift(thing);
    this.top = thing;
  }
  pop() {
    const thing = this.storage.shift():
  }
}