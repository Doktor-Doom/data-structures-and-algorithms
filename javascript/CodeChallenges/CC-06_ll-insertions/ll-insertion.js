'use strict';

append(val) {
  let current = this.head;
  while (current) {
    if (current !== null) {
      current = current.next
    } else {
      current.next = new Node(val);
    }
  }
}
insertBefore(val, newVal) {
  let current = this.head;
  while(current) {
    if (current.next.val !== val) {
      current = current.next;
    } else {
      let newNode = new Node(newVal);
      newNode.next = newNode;
      current.next = newNode;
    }
  }
}
insertAfter(val, newVal) {
  let current = this.head;
  while (current) {
    if (current.val !== val) {
      current = current.next;
    } else {
      let newNode = new Node(newVal);
      newNode.net = current.next;
      current.next = newNode;
    }
  }
}