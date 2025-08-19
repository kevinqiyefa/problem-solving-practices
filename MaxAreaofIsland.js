// 695. Max Area of Island

// Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)

// Example 1:

// [[0,0,1,0,0,0,0,1,0,0,0,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,1,1,0,1,0,0,0,0,0,0,0,0],
//  [0,1,0,0,1,1,0,0,1,0,1,0,0],
//  [0,1,0,0,1,1,0,0,1,1,1,0,0],
//  [0,0,0,0,0,0,0,0,0,0,1,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,0,0,0,0,0,0,1,1,0,0,0,0]]
// Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.
// Example 2:

// [[0,0,0,0,0,0,0,0]]
// Given the above grid, return 0.
// Note: The length of each dimension in the given grid does not exceed 50.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  //   let max = 0;

  //   for (let row = 0; row < grid.length; row++) {
  //     for (let col = 0; col < grid[row].length; col++) {
  //       if (grid[row][col] === 1) {
  //         max = Math.max(
  //           max,
  //           dfs(grid, row, col, grid.length - 1, grid[row].length - 1)
  //         );
  //       }
  //     }
  //   }

  //   return max;
  // };

  // function dfs(grid, i, j, n, m) {
  //   if (grid[i][j] === 0) return 0;

  //   grid[i][j] = 0;

  //   let val = 1;
  //   if (i > 0) val += dfs(grid, i - 1, j, n, m);
  //   if (i < n) val += dfs(grid, i + 1, j, n, m);
  //   if (j > 0) val += dfs(grid, i, j - 1, n, m);
  //   if (j < m) val += dfs(grid, i, j + 1, n, m);

  //   return val;

  let maxArea = 0;
  let rows = grid.length;
  let cols = grid[0].length;

  const dfs = (i, j) => {
    if (i < 0 || j < 0 || i >= rows || j >= cols || grid[i][j] === 0) {
      return 0;
    }
    grid[i][j] = 0;

    return 1 + dfs(i + 1, j) + dfs(i - 1, j) + dfs(i, j + 1) + dfs(i, j - 1);
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        let area = dfs(i, j);
        maxArea = Math.max(maxArea, area);
      }
    }
  }

  return maxArea;
};
