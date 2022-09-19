function knightMoves(start, end) {
  
}

function Graph(value) {
  return {
    value: value,
    adjSquares: new Map(),

    // Add vertex to adjacent squares
    addVertex(v) {
      return this.adjSquares.set(v, []);
    },

    // Add edge to the graph
    addEdge(v, w) {
      // Shortest knight traversal will be a directed graph
      this.adjSquares.get(v).push(w);
    },



  }
}