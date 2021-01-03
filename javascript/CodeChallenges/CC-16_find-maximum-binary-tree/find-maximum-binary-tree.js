'use strict';

findMaximumValue(){
  let array = this.inOrder(this.root);
  for (let i=0; i < array.length; i++){
    var max = 0;
    if (array[i] > max){
      max = array[i];
    }
  }
  return max;
}