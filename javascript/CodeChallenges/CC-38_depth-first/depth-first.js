// Create a function that accepts an adjacency list as a graph, and conducts a depth first traversal. Without utilizing any of the built-in methods available to your language, return a collection of nodes in their pre-order depth-first traversal order.
 //=====Depth First Search=================================================
 depthFirst(startNode) {
  const visitedNodes = new Set();
  const _traversedNeighbors = (node) => {
    visitedNodes.add(node);
    const neighbors = this.getNeighbor(node);
    for(let edge of neighbors){
      if(!visitedNodes.has(edge.vertex)){
        _traversedNeighbors(edge.vertex);
      }
    }
  };
  _traversedNeighbors(startNode);
  return visitedNodes;
}
// ============================================================