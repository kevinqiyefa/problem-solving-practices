// 785. Is Graph Bipartite?

// Given an undirected graph, return true if and only if it is bipartite.

// Recall that a graph is bipartite if we can split it's set of nodes into two independent subsets A and B such that every edge in the graph has one node in A and another node in B.

// The graph is given in the following form: graph[i] is a list of indexes j for which the edge between nodes i and j exists.  Each node is an integer between 0 and graph.length - 1.  There are no self edges or parallel edges: graph[i] does not contain i, and it doesn't contain any element twice.

// Example 1:
// Input: [[1,3], [0,2], [1,3], [0,2]]
// Output: true
// Explanation:
// The graph looks like this:
// 0----1
// |    |
// |    |
// 3----2
// We can divide the vertices into two groups: {0, 2} and {1, 3}.
// Example 2:
// Input: [[1,2,3], [0,2], [0,1,3], [0,2]]
// Output: false
// Explanation:
// The graph looks like this:
// 0----1
// | \  |
// |  \ |
// 3----2
// We cannot find a way to divide the set of nodes into two independent subsets.

// Note:

// graph will have length in range [1, 100].
// graph[i] will contain integers in range [0, graph.length - 1].
// graph[i] will not contain i or duplicate values.
// The graph is undirected: if any element j is in graph[i], then i will be in graph[j].

/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
  let visited = {};

  //loop thru each node in graph, and bfs check its neighbor is valid or not;
  for (let curNode = 0; curNode < graph.length; curNode++) {
    //if not valid, then return false
    // if(!bfs(visited, graph, curNode)) return false;

    if (!dfs(visited, graph, curNode, 1)) return false;
  }

  return true;
};

const bfs = (visited, graph, cur) => {
  //check if node is visited or not
  if (!(cur in visited)) {
    let queue = [cur];
    visited[cur] = 1; //mark either 1 or 2

    while (queue.length > 0) {
      let node = queue.shift();
      let neighborLabel = visited[node] === 1 ? 2 : 1;

      //check the node's neighbor
      for (let n of graph[node]) {
        // if neighbor is never visited, mark it visited and put it into the queue
        if (!(n in visited)) {
          visited[n] = neighborLabel;
          queue.push(n);
        } else if (visited[n] === visited[node]) {
          // return false if neighor is visited and it has the same label as the curNode
          return false;
        }
      }
    }
  }

  return true;
};

const dfs = (visited, graph, cur, label) => {
  if (!(cur in visited)) {
    visited[cur] = label;

    for (let n of graph[cur]) {
      let neighborLabel = label === 1 ? 2 : 1;
      if (!dfs(visited, graph, n, neighborLabel) || visited[n] === label) {
        return false;
      }
    }
  }

  return true;
};
