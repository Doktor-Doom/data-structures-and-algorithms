'use strict';

function getEdges(graph, cities) {
  let cost = 0;
  let found = false;
  if (!graph || !cities) return [false, cost];

  for (let i = 1; i < cities.length; i++) {
    let originCity = cities[i - 1];
    let currentCity = cities[i];
    for (const [key, value] of graph.adjacencyList.entries()) {
      if (key.value === originCity) {
        for (let j = 0; j < value.length; j++) {
          if (value[j].vertex.value === currentCity) {
            cost += value[j].weight;
            found = true;
            break;
          } else if (j === value.length - 1) return [false, 0];
        }
      }
    }
  }
  return [found, cost];
}
