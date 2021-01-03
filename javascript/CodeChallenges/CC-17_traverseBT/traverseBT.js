'use strict';

breadthFirst (root) {
  if (!root) throw new Error;
  let array = [];
  let currentNode = this.root;
  array.push(currentNode.value);

  function _helper (node) {
    if (node.left) array.push(node.left.value);
    if (node.right) array.push(node.right.value);
    if (node.left) _helper(node.left);
    if (node.right) _helper(node.right);
    return;
  }
  _helper(currentNode);
  return array;
}
