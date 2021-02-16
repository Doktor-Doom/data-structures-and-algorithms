'use strict';

const HashMap = require('../CC-31_hashTable/hashTable.js');

function treeIntersection (treeOne, treeTwo) {

  if(!treeOne.root || !treeTwo.root) return null;

  let map = new HashMap (100);
  let mapTwo = new HashMap (100);
  let outputArray = [];

  function _treeTraverseOne (node) {
    if(!map.contains(node.value.toString())){
      map.set(node.value.toString());
    }
    if(node.leftChild) _treeTraverseOne(node.leftChild);
    if(node.rightChild) _treeTraverseOne(node.rightChild);

  }

  function _treeTraverseTwo (node) {
    if(map.contains(node.value.toString()) && !mapTwo.contains(node.value.toString())){
      outputArray.push(node.value);
      mapTwo.set(node.value.toString());
    }
    if(node.leftChild) _treeTraverseTwo(node.leftChild);
    if(node.rightChild) _treeTraverseTwo(node.rightChild);

  }

  _treeTraverseOne(treeOne.root);
  _treeTraverseTwo(treeTwo.root);

  return outputArray;
}


// function treeIntersection(tree1, tree2) {

//   let results = [];
//   const hashtable = new HashMap(100);
//   const _walk1 = (root) => {
//     if(!hashtable.contains(root.value.toString())) {
//       hashtable.add(root.value.toString(), root.value);
//     }
//     if (root.left) _walk1(root.left);
//     if (root.right) _walk1(root.right);
//   };
//   _walk1(tree1.root);
//   console.log('Hashtable:', hashtable.map[100]);
//   const _walk2 = (root) => {
//     if(hashtable.contains(root.value.toString())) {
//       results.push(root.value);
//     }
//     if(root.left) _walk2(root.left);
//     if(root.right) _walk2(root.right);

//   };
//   _walk2(tree2.root);

//   return results;
// }

module.exports = treeIntersection;
