'use strict';
const {Graph, Vertex} = require('./graph');

describe('Graph data structure', ()=>{

  it('1. Node can be successfully added to the graph', ()=>{
    let vertex = new Vertex(7);
    let graph = new Graph();
    graph.addVertex(vertex);
    console.log('1. node added to graph', graph)
    expect(graph.getNeighbors(vertex)).toEqual([]);
  });

  it('Can successfully return a graph with only one node', () => {
    expect(graph.getNodes().get(vertex1)).toStrictEqual([]);
  });

  it('Can successfully return a graph with only 1 edge (two nodes and an edge)', () => {
    expect(graph.size()).toBe(2);
  });

  it('Can successfully return weights of the edges of the neighbors of a node in the graph', () => {
    let neighbors = graph.getNeighbors(vertex4);
    expect(neighbors.length).toBe(2);
    expect(neighbors[0].weight).toStrictEqual(5);
    expect(neighbors[1].weight).toStrictEqual(5);

  });

};
