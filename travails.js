function KnightMoves(noOfVertices) {
  return {
    // defning vertex array and adjacent list
    noOfVertices: noOfVertices,
    adjList: new Map(),

    // Add vertex to the graph
    addVertex(v) {
      // Initialize the adjacent list with a null array
      return this.adjList.set(v, []);
    },

    // Add edge to the graph
    addEdge(v, w) {
      // Get the list for vertex v and put the 
      // vertex w denoting edge between v and w
      this.adjList.get(v).push(w);

      // Since graph is undirected, add an edge from w to v also
      this.adjList.get(w).push(v);
    },

    // Prints the vertex and adjacency list
    printGraph() {
      // Get all the vertices
      const get_keys = this.adjList.keys();
      
      // Iterate over the vertices
      for (let i of get_keys) {
        // Great the coresponding adjacency list for the vertex
        const get_values = this.adjList.get(i);
        let conc = '';

        // Iterate over the adjacency list
        // concatenate the values into a string
        for (let j of get_values) {
          conc += j + ' ';
        }
        // Print the vertex and its adjacency list
        console.log(i + ' -> ' + conc);
      }
    }
  }
}

const g = new KnightMoves(6);
const vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ];

// adding vertices
for (let i = 0; i < vertices.length; i += 1) {
  g.addVertex(vertices[i]);
}

// adding edges
g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');

g.printGraph();