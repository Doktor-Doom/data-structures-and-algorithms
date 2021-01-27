'use strict';
// Classes====================
class Vertex {
  constructor(value) {
    this.value = value;
  }
}
class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}
class Graph {
  constructor() {
    this.adjacencyList = new Map();
    this.size = 0;
  }
  // add vertex to graph
  addVertex(value) {
    const vertex = new Vertex(value);
    this.adjacencyList.set(vertex, []);
  }
  addDirectedEdge(startingVertex, endingVertex, weight) {
    if(!this.adjecencyList.has(startingVertex) || !this.adjacencyList.has(endingVertex)){
      throw new Error('Start or End vertex needed');
    }
    const adjacencies = this.adjacencyList.get(startingVertex);
    adjacencies.push(new Edge(endingVertex, weight));
  }
  getNeighbor(vertex) {
    if(!this.adjacencyList.has(vertex)){
      throw new Error('Invalid Vertex', vertex);
    }
    return this.adjacencyList.get(vertex);
  }
  // =====Breadth First Search=============================================
  breadthFirst(startNode) {
    const queue = [];
    const visitedNodes = new Set();
    queue.push(startNode);
    visitedNodes.add(startNode);
    while(queue.length) {
      const currentNode = queue.shift();
      const neighbors = this.getNeighbor(currentNode);
      for (let neighbor of neighbors){
        const neighborNode = neighbor.vertex;
        if(visitedNodes.has(neighborNode)){
          continue;
        } else {
          visitedNodes.add(neighborNode);
        }
        queue.push(neighborNode);
      }
    }
    return visitedNodes;
  }
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
  // ========================================================================
  pathTo(startNode, endNode) {
    const stack = [];
    const visitedNodes = new Set();
    const parentPath = new Map();
    stack.push(startNode);
    visitedNodes.add(startNode);
    while(stack.length) {
      const currentNode = stack.pop();
      if(currentNode === endNode){
        return parentPath;
      }
      const neighbors = this.getNeighbor(currentNode);
      for(let neighbor of neighbors){
        const neighborNode = neighbor.vertex;
        if(visitedNodes.has(neighborNode)){
          continue;
        } else {
          visitedNodes.add(neighborNode);
        }
        stack.push(neighborNode);
        parentPath.set(neighborNode, currentNode);
      }
    }
    return parentPath;
  }
  size(startNode) {
    let count = 0;
    if(!startNode) return count;
    const visitedNodes = new Set();
    const _traversedNeighbors = (node)=> {
      visitedNodes.add(node);
      count++
      const neighbors = this.getNeighbor(node);
      for(let edge of neighbors) {
        if(!visitedNodes.has(edge.vertex)){
          _traversedNeighbors(edge.vertex);
        }
      }
    }
    _traversedNeighbors(startNode);
    return count;
  }
}


module.exports = {Graph, Vertex};
