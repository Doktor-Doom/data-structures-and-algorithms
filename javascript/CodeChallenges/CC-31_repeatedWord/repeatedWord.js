'use strict';

const HashMap = require('../CC-31_hashTable/hashTable.js');

function repeatedWord (string) {

  let cleanString = string.replace(/[^\w\s]/gi, '').toLowerCase(); 

  let wordArray=cleanString.split(' ');

  let map = new HashMap(100);
  for (let i = 0; i < wordArray.length; i++){
    if(map.contains(wordArray[i])){
      return wordArray[i];
    } else {
      map.set(wordArray[i], wordArray[i]);
    }
    i++;
  }

  return null;

}

module.exports = repeatedWord;
