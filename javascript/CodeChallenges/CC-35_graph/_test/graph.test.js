'use strict';
const {Graph, Vertex} = require('./test/graph');

describe('Graph data structure', ()=>{

  it('1. Node can be successfully added to the graph', ()=>{
    let vertex = new Vertex(7);
    let graph = new Graph();
    graph.addVertex(vertex);
    console.log('1. node added to graph', graph)
    expect(graph.getNeighbors(vertex)).toEqual([]);
  })
