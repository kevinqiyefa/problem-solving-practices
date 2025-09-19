// 1091. Shortest Path in Binary Matrix

// Given an n x n binary matrix grid, return the length of the shortest clear path in the matrix. If there is no clear path, return -1.

// A clear path in a binary matrix is a path from the top-left cell (i.e., (0, 0)) to the bottom-right cell (i.e., (n - 1, n - 1)) such that:

// All the visited cells of the path are 0.
// All the adjacent cells of the path are 8-directionally connected (i.e., they are different and they share an edge or a corner).
// The length of a clear path is the number of visited cells of this path.

 

// Example 1:


// Input: grid = [[0,1],[1,0]]
// Output: 2
// Example 2:


// Input: grid = [[0,0,0],[1,1,0],[1,1,0]]
// Output: 4
// Example 3:

// Input: grid = [[1,0,0],[1,1,0],[1,1,0]]
// Output: -1
 

// Constraints:

// n == grid.length
// n == grid[i].length
// 1 <= n <= 100
// grid[i][j] is 0 or 1

/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
      const directions = [
        [-1, 0], [1, 0], // top, bottom
        [0, -1], [0, 1], // left, right
        [-1, -1], [-1, 1], // top-left, top-right
        [1, -1], [1, 1], // bottom-left, bottom-right
    ];

    const N = grid.length

    if(grid[0][0]===1 || grid[N-1][N-1] !== 0) return -1

    let queue = [[0,0,1]]
    grid[0][0] = 1; // we mark as visited


    //BFS
    while(queue.length){
        const [row,col,path] = queue.shift()
        
        // reached destination
        if(row === N-1 && col===N-1) return path

        for(let [dx,dy] of directions){
            let x = row+dx
            let y = col+dy

            if(x>=0 && y >= 0 && x< N && y < N && grid[x][y] === 0){
                queue.push([x, y, path+1])
                grid[x][y] = 1; // we mark as visited
            }
        }

    }

    return -1
    
};