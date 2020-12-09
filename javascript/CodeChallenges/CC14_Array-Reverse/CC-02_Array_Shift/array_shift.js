

function insertShiftArray (arr, num) {
  let index = Math.ceil(arr.length/2);
  arr[index] = num;
  return arr;
};

insertShiftArray();