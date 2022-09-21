# Knights Travails
Find the shortest path between two positions for a chess' knight piece

## Links
- [Link to assignment](https://www.theodinproject.com/lessons/javascript-knights-travails)

## Summary
Knights Travails is a function that accepts the starting and end position of a chess board (from 0,0 to 7,7). The project uses the graph data-structure and finds the shortest possible route by using depth-first search (DFS).

knightMoves.js contains a single factory function, `Graph()`. It returns `adjSquares`, which contains edges and 3 functions that,
  1. Creates the vertices (`addVertices()`)
  2. Define the edges (`addEdges()`)
  3. List the shortest routes (`knightMoves()`)

```javascript
function Graph() {
  return {
    adjSquares: new Map(),

    addVertices(size) {
    },

    addEdges(vertex = this.adjSquares) {
    },

    knightMoves(start, end) {
    },
  }
}
```

When running the below lines of code,
```javascript
const g = new Graph();
g.addVertices(8);
g.addEdges();
g.knightMoves('0,0', '1,2');
g.knightMoves('3,1', '2,2');
g.knightMoves('7,7', '7,6');
```

returns the following lines in the console:
```javascript
Fastest Routes from 0,0 to 1,2
Array [ "0,0", "1,2" ]

Fastest Routes from 3,1 to 2,2
Array(3) [ "3,1", "1,0", "2,2" ]
Array(3) [ "3,1", "4,3", "2,2" ]

Fastest Routes from 7,7 to 7,6
Array(4) [ "7,7", "5,6", "6,4", "7,6" ]
Array(4) [ "7,7", "6,5", "5,7", "7,6" ]

```

## Challenges
This repository contains an extra folder labeled, `graphPractice`. In it, I followed the [geeksforgeeks implementation of graphs for javascript](https://www.geeksforgeeks.org/implementation-graph-javascript/) and it helped immensely.

The geeksforgeeks article covers depth-first and breadth-first traversal but I used [this particular stackoverflow question](https://stackoverflow.com/questions/72288596/algorithm-to-find-all-path-between-two-nodes-in-an-undirected-weighed-graph) to help me understand how to return the shortest path.

To anybody who is doing this project for the first time: A big hint would be to create the grid with all of its vertices and edges first, and then figure out traversal.