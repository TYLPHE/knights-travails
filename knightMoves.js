import Queue from "./Queue.js";

function knightMoves(start, end) {
  
}

function Graph() {
  return {
    adjSquares: new Map(),

    // Add vertex to adjacent squares
    addVertex(v) {
      return this.adjSquares.set(v, []);
    },

    // Add edge to the graph
    addEdge(v, w) {
      this.adjSquares.get(v).push(w);
      this.adjSquares.get(w).push(v);
    },

    addEdges(vertex = this.adjSquares) {
      for (let [ key ] of vertex) {
        const keyArr = key.split(',')
        const x = parseInt(keyArr[0]);
        const y = parseInt(keyArr[1]);

        // Change direction of array based on clock position
        const direction = {
          1: [ x + 1, y + 2 ].toString(),
          2: [ x + 2, y + 1 ].toString(),
          
          4: [ x + 2, y - 1 ].toString(),
          5: [ x + 1, y - 2 ].toString(),
          
          7: [ x - 1, y - 2 ].toString(),
          8: [ x - 2, y - 1 ].toString(),
          
          10: [ x - 2, y + 1 ].toString(),
          11: [ x - 1, y + 2 ].toString(),
        }
        for (let j in direction) {
          if (vertex.has(direction[j])) {
            if (!vertex.get(key).includes(direction[j])) {
              this.addEdge(key, direction[j])
            }
          }
        }
      }
      console.log(vertex);
    },

    addVertices(size) {
      for (let i = 0; i < size; i += 1) {
        for (let j = 0; j < size; j += 1) {
          this.adjSquares.set(`${[i, j]}`, []);
        }
      }
    },

    dfs(startingNode, endNode, found = false) {
      const DFSUtil = (vert, visited) => {
        if (vert)
        visited[vert] = true;
        console.log(vert);
        const get_neighbors = this.adjList.get(vert);
        for (let i in get_neighbors) {
          const get_elem = get_neighbors[i];
          if (!visited[get_elem]) {
            DFSUtil(get_elem, visited);
          }
        }
      }

      const visited = {};
      DFSUtil(startingNode, visited);
    },
  }
}

const g = new Graph();
g.addVertices(8);
g.addEdges();

// Add verticies
// function addVertices(size) {
//   const arr = [];
//   for (let i = 0; i < size; i += 1) {
//     for (let j = 0; j < size; j += 1) {
//       arr.push([i, j]);
//     }
//   }
//   return console.log(arr);
// }
// const vertices = addVertices(8);
