

function insertShiftArray (arr, num) {
  let index = Math.ceil(arr.length/2);
  let banana = [];
  for (let i = 0; i < arr.length + 1; i++) {
    if (i < index) {
      banana[i] = arr[i];
    } else if (i === index) {
      banana[i] = num;
    } else {
      banana[i] = arr[i - 1];
    }
  };
  return banana;
};

insertShiftArray();