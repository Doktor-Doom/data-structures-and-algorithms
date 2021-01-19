class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    let node = new Node(value);
    
    if(!this.head){
      this.head = node;
      return;
    }

    let current = this.head;
    while(current){
      current = current.next;
    }

    current.next = node;

  }
}

class HashMap {
  constructor(size){
    this.map = new Array(size);
    this.size = size;
  }
  // hash does magical math, represents the bucket that it is

  // turn the key into an array of characters that make up a string
  // .reduce to add the charCodeAt(0) + totalSoFar(acculumator)
  // multiply it by 599
  // then get the remainder when you divide by the size

  hash(key) {
    return key.split('').reduce((anwserSoFar, value) => {
      return anwserSoFar + value.charCodeAt(0);
    }, 0) * 599 % this.size;
  }

  // need a method that will allow me to put something into my hashmap
  set(key, value) {
    // 1. get my hash
    const hash = this.hash(key);

    // 2. make value entry
    const entry = {[key]: value};

    // 3. set the entry to the hash value in the map
    // 3.1 check to see if there is a hash there already - if not, I need to put in a LL
    if( !this.map[hash] ){ this.map[hash] = new LinkedList(); }
    // 
    // 3.2 add the entry
    this.map[hash].add( entry );
  }
  // find a key in the hashmap and return its value
  /**
   * 
   * @param {*} key
   * @return {string}
   * 
   * [
   *  {
   *   hash: {
   *          value: { key: value }
   *          next: null --could also be {value: {key: value},
   *                                      next: null}
   *         }
   *          head: null
   * }
   * ]
   */
  // every hash will be a linked list, traverse it using .next until you find the one you want.

  get(key){
    // hash the key
    const hash = this.hash(key);
    //  if no hash return null
    if(!this.map[hash]) return null;
    //  escape clause-- 
    // first hash the key
    // make my hash position (which is a linked list) equal to current
    let current = this.map[hash].head;
    // while current exist
    while(current){
      if(current.value.hasOwnProperty(key)){ return current.value[key] }
      current = current.next;
    }
    return null;
    // check if the keys match
      // if they match return the value
  }
}
// ========================(amount of buckets)
const myHash = new HashMap(2000);
myHash.set('lena', 'mom');
myHash.set('adam', 'dad');
myHash.set('ilya', 'kid');
myHash.set('bob');


//  class convert into hooks
import React from 'react';
class Form extends React.Component{
  constructor(props){
    super(props);
    this.state={
      name:'',
      age:0,
      shoeSize:0
    }
  }
  //TODO: write out the function handleSubmit
  render(){
    return(
      <form onSubmit={this.handleSubmmit}>
        <input type="text" name="name"></input>
        <input type="text" name="age"></input>
        <input type="text" name="shoesize"></input>
        <button>Submit</button>
      </form>
    )
  }
}



// ======ricardo answers above

function Form(props){
  const [name, setName] = useState('default');
  const [age, setAge] = useState('21');
  const [shoeSize, setShoeSize] = useState('7');
  const handleSubmit = e =>{
    e.preventDefault();
    setName(e.target.name.value);
    setAge(e.target.age.value);
    setShoeSize(e.target.shoeSize.value);
  }
  return(
    <div id="app">
           <h3>app</h3>
           <p>name: {name}</p>
           <p>age: {age}</p>
           <p>shoeSize: {shoeSize}</p>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name"></input>
            <input type="text" name="age"></input>
            <input type="text" name="shoeSize"></input>
            <button>Submit</button>
          </form>
          </div>
        )
}
export default Form;
