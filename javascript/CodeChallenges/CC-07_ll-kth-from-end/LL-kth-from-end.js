'use strict';

kthFromEnd(K) {
  let current = this.head;
  let length = 0;
  while (current) {
    length += 1;
    current = current.next;
  }
  if (K > length) {
    return 'K should be less than';
  }
  let valK = length - K;
  current = this.head;
  for (let i = 0; i < valK; i++) {
    if ( i !== valK - 1) {
      return current.value;
    } else {
      current = current.next;
    }
  }
}