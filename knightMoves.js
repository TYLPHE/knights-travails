function Graph() {
  return {
    adjSquares: new Map(),

    addEdges(vertex = this.adjSquares) {
      for (let [ key ] of vertex) {
        const keyArr = key.split(',')
        const x = parseInt(keyArr[0]);
        const y = parseInt(keyArr[1]);

        // Change direction based on clock position
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
              this.adjSquares.get(key).push(direction[j]);
              this.adjSquares.get(direction[j]).push(key);
            }
          }
        }
      }
    },

    addVertices(size) {
      for (let i = 0; i < size; i += 1) {
        for (let j = 0; j < size; j += 1) {
          this.adjSquares.set(`${[i, j]}`, []);
        }
      }
    },

    knightMoves(start, end) {
      const paths = [];
      const visited = new Set();
      const queue = [];
      queue.push([start, [start]]);
      while (queue.length > 0) {
        let [current, path] = queue.shift();
        visited.add(current);
        if (current === end) {
          paths.push(path);
        }
        const neighbors = this.adjSquares.get(current);
        for (let neighbor of neighbors) {
          if (!visited.has(neighbor)) {
            queue.push([neighbor, [...path, neighbor]]);
          }
        }
      }
      console.log(`Fastest Routes from ${start} to ${end}`)
      paths.forEach(element => console.log(element));
    },
  }
}

const g = new Graph();
g.addVertices(8);
g.addEdges();
g.knightMoves('0,0', '1,2');
g.knightMoves('3,1', '2,2');
g.knightMoves('7,7', '7,6')