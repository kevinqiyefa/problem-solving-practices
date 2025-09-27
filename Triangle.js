// 120. Triangle

// Given a triangle array, return the minimum path sum from top to bottom.

// For each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.

 

// Example 1:

// Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
// Output: 11
// Explanation: The triangle looks like:
//    2
//   3 4
//  6 5 7
// 4 1 8 3
// The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).
// Example 2:

// Input: triangle = [[-10]]
// Output: -10
 

// Constraints:

// 1 <= triangle.length <= 200
// triangle[0].length == 1
// triangle[i].length == triangle[i - 1].length + 1
// -104 <= triangle[i][j] <= 104
 

// Follow up: Could you do this using only O(n) extra space, where n is the total number of rows in the triangle?


// Complexity
// Time Complexity: O(n²) where n = number of rows. Each element is processed once.
// Space Complexity:
// O(1) if updated in-place
// O(n) if an auxiliary DP array is used
// Detailed Dry Run
// Input Triangle:

//     [2]
//    [3,4]
//   [6,5,7]
//  [4,1,8,3]
// Step-by-Step Execution:
// Initial State:

// Row 0:      [2]
// Row 1:     [3, 4]
// Row 2:    [6, 5, 7]
// Row 3:   [4, 1, 8, 3]
// STEP 1: Process Row 2 (i=2)

// Position (2,0): 6 + min(4, 1) = 6 + 1 = 7
// Position (2,1): 5 + min(1, 8) = 5 + 1 = 6
// Position (2,2): 7 + min(8, 3) = 7 + 3 = 10
// Row 0:      [2]
// Row 1:     [3, 4]
// Row 2:    [7, 6, 10]  ← Updated
// Row 3:   [4, 1, 8, 3]
// STEP 2: Process Row 1 (i=1)

// Position (1,0): 3 + min(7, 6) = 3 + 6 = 9
// Position (1,1): 4 + min(6, 10) = 4 + 6 = 10
// Row 0:      [2]
// Row 1:     [9, 10]    ← Updated
// Row 2:    [7, 6, 10]
// Row 3:   [4, 1, 8, 3]
// STEP 3: Process Row 0 (i=0)

// Position (0,0): 2 + min(9, 10) = 2 + 9 = 11
// Row 0:      [11]      ← Final Answer
// Row 1:     [9, 10]
// Row 2:    [7, 6, 10]
// Row 3:   [4, 1, 8, 3]
// Visual Processing Flow:
// Initial →    After Row 2 →   After Row 1 →    Final Result
//   [2]           [2]             [2]              [11]
//  [3,4]         [3,4]          [9,10]           [9,10]
// [6,5,7]      [7,6,10]       [7,6,10]         [7,6,10]
// [4,1,8,3]   [4,1,8,3]      [4,1,8,3]        [4,1,8,3]
// Minimum Path Sum = 11
// Optimal Path: 2 → 3 → 5 → 1 (following positions (0,0) → (1,0) → (2,1) → (3,1))

// Animated Visualization
// Step-by-Step Algorithm Animation
// 🎬 INITIAL STATE:
//                     (0,0)
//                    ┌─────┐
//                    │  2  │
//                    └─────┘
//                   ╱       ╲
//             (1,0)             (1,1)
//            ┌─────┐           ┌─────┐
//            │  3  │           │  4  │
//            └─────┘           └─────┘
//           ╱       ╲         ╱       ╲
//     (2,0)         (2,1)             (2,2)
//    ┌─────┐       ┌─────┐           ┌─────┐
//    │  6  │       │  5  │           │  7  │
//    └─────┘       └─────┘           └─────┘
//    ╱     ╲       ╱     ╲           ╱     ╲
// (3,0)   (3,1)           (3,2)   (3,3)
// ┌───┐   ┌───┐           ┌───┐   ┌───┐
// │ 4 │   │ 1 │           │ 8 │   │ 3 │
// └───┘   └───┘           └───┘   └───┘
// 🎬 STEP 1: Processing Row 2 (i=2)
// Processing: (2,0) = 6 + min(4,1) = 7 ✅
// Processing: (2,1) = 5 + min(1,8) = 6 ✅  
// Processing: (2,2) = 7 + min(8,3) = 10 ✅

//                     (0,0)
//                    ┌─────┐
//                    │  2  │
//                    └─────┘
//                   ╱       ╲
//             (1,0)             (1,1)
//            ┌─────┐           ┌─────┐
//            │  3  │           │  4  │
//            └─────┘           └─────┘
//           ╱       ╲         ╱       ╲
//     (2,0)         (2,1)             (2,2)
//    ┌─────┐       ┌─────┐           ┌─────┐
//    │ 7 🔄│       │ 6 🔄│           │10🔄 │  ← UPDATED
//    └─────┘       └─────┘           └─────┘
//    ╱     ╲       ╱     ╲           ╱     ╲
// (3,0)   (3,1)           (3,2)   (3,3)
// ┌───┐   ┌───┐           ┌───┐   ┌───┐
// │ 4 │   │ 1 │           │ 8 │   │ 3 │
// └───┘   └───┘           └───┘   └───┘
// 🎬 STEP 2: Processing Row 1 (i=1)
// Processing: (1,0) = 3 + min(7,6) = 9 ✅
// Processing: (1,1) = 4 + min(6,10) = 10 ✅

//                     (0,0)
//                    ┌─────┐
//                    │  2  │
//                    └─────┘
//                   ╱       ╲
//             (1,0)             (1,1)
//            ┌─────┐           ┌─────┐
//            │ 9 🔄│           │10🔄 │  ← UPDATED
//            └─────┘           └─────┘
//           ╱       ╲         ╱       ╲
//     (2,0)         (2,1)             (2,2)
//    ┌─────┐       ┌─────┐           ┌─────┐
//    │  7  │       │  6  │           │ 10  │
//    └─────┘       └─────┘           └─────┘
//    ╱     ╲       ╱     ╲           ╱     ╲
// (3,0)   (3,1)           (3,2)   (3,3)
// ┌───┐   ┌───┐           ┌───┐   ┌───┐
// │ 4 │   │ 1 │           │ 8 │   │ 3 │
// └───┘   └───┘           └───┘   └───┘
// 🎬 STEP 3: Processing Row 0 (i=0) - FINAL
// Processing: (0,0) = 2 + min(9,10) = 11 ✅

//                     (0,0)
//                    ┌─────┐
//                    │11🏆 │  ← FINAL ANSWER
//                    └─────┘
//                   ╱       ╲
//             (1,0)             (1,1)
//            ┌─────┐           ┌─────┐
//            │  9  │           │ 10  │
//            └─────┘           └─────┘
//           ╱       ╲         ╱       ╲
//     (2,0)         (2,1)             (2,2)
//    ┌─────┐       ┌─────┐           ┌─────┐
//    │  7  │       │  6  │           │ 10  │
//    └─────┘       └─────┘           └─────┘
//    ╱     ╲       ╱     ╲           ╱     ╲
// (3,0)   (3,1)           (3,2)   (3,3)
// ┌───┐   ┌───┐           ┌───┐   ┌───┐
// │ 4 │   │ 1 │           │ 8 │   │ 3 │
// └───┘   └───┘           └───┘   └───┘
// 🎬 OPTIMAL PATH TRACE:
//                     (0,0)
//                    ┌─────┐
//                    │11⭐ │  Step 1: Start here
//                    └─────┘
//                   ╱🔥     ╲
//             (1,0)             (1,1)
//            ┌─────┐           ┌─────┐
//            │ 9⭐ │           │ 10  │  Step 2: Choose left (9 < 10)
//            └─────┘           └─────┘
//           ╱       ╲🔥       ╱       ╲
//     (2,0)         (2,1)             (2,2)
//    ┌─────┐       ┌─────┐           ┌─────┐
//    │  7  │       │ 6⭐ │           │ 10  │  Step 3: Choose right (6 < 7)
//    └─────┘       └─────┘           └─────┘
//    ╱     ╲       ╱🔥   ╲           ╱     ╲
// (3,0)   (3,1)           (3,2)   (3,3)
// ┌───┐   ┌───┐           ┌───┐   ┌───┐
// │ 4 │   │1⭐|           │ 8 │   │ 3 │  Step 4: Choose left (1 < 8)
// └───┘   └───┘           └───┘   └───┘

// 🔥 = Path taken
// ⭐ = Nodes in optimal path
// 🏆 = Final answer
// 🔄 = Updated in current step


/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {

    for( let i = triangle.length-2; i>=0; i--){
        for(let j = 0; j < triangle[i].length; j++){
            triangle[i][j] += Math.min(triangle[i+1][j], triangle[i+1][j+1])
        }
    }

    return triangle[0][0]
    
};
