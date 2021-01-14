'use strict';

const mergeSort = (array) => {
  let n = array.length;
  if(n > 1) {
    let mid = Math.floor(n / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid);

    mergeSort(left);
    mergeSort(right);
    merge(left, right, [8,4,23,42,16,15]);
  }
};
function merge(left, right, array) {
  let i = 0;
  let j = 0;
  let k = 0;

  while(i < left.length && j < right.length) {
    if(left[i] <= right[j]) {
      array[k] = left[i];
      i = i + 1;
    } else {
      array[k] = right[j];
      j = j + 1;
    }
    k = k + 1;
  }
  if(i === left.length) {
    right[j].push(array[k]);
  } else {
    left[i].push(array[k]);
  }
}


// function mergeSort(arr) {
//   if(arr.length )
// }