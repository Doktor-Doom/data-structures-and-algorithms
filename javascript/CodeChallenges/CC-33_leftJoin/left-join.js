'Use strict';

// const HashMap = require('../CC-31_hashTable/hashTable.js');

function leftJoin(hash1, hash2) {
  if(hash1 === null || hash2 === null) return null;
  let results = [];
  for (let i = 0; i <= hash1.map.length-1; i++) {
    if (hash1.map[i]) {
      let key = [Object.keys(hash1.map[i].head.value)[0]];
      let value = [Object.values(hash1.map[i].head.value)[0]]
      results.push([key[0], value[0]]);
      if (hash1.map[i].head.next !== null) {
        let current = hash1.map[i].head.next;
        while (current.next !== null) {
          results.push(Object.keys(current.value)[0], current.value);
          current = current.next;
        }
      }
    }
  }
  for (let j = 0; j <= results.length-1; j++) {
    let match = hash2.get(results[j][0]);
    results[j].push(match);
  };
  return results.length === 0 ? null : results;
}






module.exports = leftJoin;

