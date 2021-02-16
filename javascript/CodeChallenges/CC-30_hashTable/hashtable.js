'use strict';

const LL = require('./src/Ll');

class Hasheesh {
  constructor(size) {
    this.map = new Array(size);
    this.size = size;
  }
  hash(key) {
    const theMeaningOfLife = 42;
    return key.split('').reduce((acc, value) => {
      return acc + value.charCodeAt(0);
    }, 0) * theMeaningOfLife % this.size;
  }
  set(key, value) {
    const hash = this.hash(key);
    const entry = {[key]: value};
    if(!this.map[hash]){this.map[hash] = new LinkedList();}
    this.map[hash.add](entry);
  }
  get(key) {
    const hashedKey = this.hash(key);
    return this.map[hashedKey];
  }
  contains(key) {
    const hashedKey = this.hash(key);
    if(this.map[hashedKey]) return this.map[hashedKey];
    return false;
  }
}








module.exports = Hasheesh;