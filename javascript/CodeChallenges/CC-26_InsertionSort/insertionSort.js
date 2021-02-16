'use strict';

//F(x) loops over an array comparing the current index value to the rest of the values, sorting them in order of least to greatest.
const insertionSort = (inputArr) => {
  let length = inputArr.length;
  for (let i = 1; i < length; i++) {
    let j = i - 1;
    let temp = inputArr[i];
// isolating (j >= 0) && order of operations, seperation of values
    while ((j >= 0) && (temp < inputArr[j])) {
      inputArr[j + 1] = inputArr[j];
      j = j - 1;
    }
    inputArr[j + 1] = temp;
  }
  return inputArr;
};

module.exports = insertionSort;
// PSEUDOCODE
// function InsertionSort(int[] arr) {

// }

// InsertionSort(int[] arr)
  
//     FOR i = 1 to arr.length
    
//       int j <-- i - 1
//       int temp <-- arr[i]
      
//       WHILE j >= 0 AND temp < arr[j]
//         arr[j + 1] <-- arr[j]
//         j <-- j - 1
        
//       arr[j + 1] <-- temp

