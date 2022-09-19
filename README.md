# knights-travails
Find the shortest path between two positions for a chess' knight piece
![A screenshot of the Knights Travails assignment]()
## Links
- [Try Knights Travails here (in progress)](https://github.com/TYLPHE/knights-travails)
- [Link to assignment](https://www.theodinproject.com/lessons/javascript-knights-travails)

## Summary
https://www.geeksforgeeks.org/implementation-graph-javascript/
https://medium.com/@tonytonev/knight-mastery-fastest-path-to-any-square-with-the-knight-a37c8db0e30d


## Thought process
This assignment is complicated for me so I'm going to place my thoughts on how to start and execute.

1. Create a function, `knightMoves`, that accepts start and end position for the knight piece.
2. Use the graph data-structure to connect to all possible locations on the board.
    - Is it faster to map out all vertices and edges first? ([Create the Knight's Graph](https://en.wikipedia.org/wiki/Knight%27s_graph)). 
      - If I do, then I need to make a undirected graph.
    - Or is it faster to map out all vertices and edges after determining the starting position?
      - If I do, then I can make a directed graph. (My initial thought is this is better to avoid an infinite series.)

3. How do I contain the vertexes within the chess board (8x8 board)?
    - While mapping out the graph, if x and y values are less than 0 and greater than 7, then return.
    - This feels like I'll need a recursive function that creates a vertex on the starting position and then create a bunch of vertices with edges within the board.
      - Will this technically create 8x8 = 64 vertices on the board? 
