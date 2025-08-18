// 207. Course Schedule

// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

// Example 1:

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0. So it is possible.
// Example 2:

// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.

// Constraints:

// 1 <= numCourses <= 2000
// 0 <= prerequisites.length <= 5000
// prerequisites[i].length == 2
// 0 <= ai, bi < numCourses
// All the pairs prerequisites[i] are unique.

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  if (!prerequisites.length) return true;

  const preMap = {};
  const visited = new Set();

  for (let p of prerequisites) {
    let course = p[0];
    let pre = p[1];
    if (course in preMap) {
      preMap[course].push(pre);
    } else {
      preMap[course] = [pre];
    }
  }

  const isCycle = (course, seen) => {
    if (seen.has(course)) {
      return true;
    }
    seen.add(course);
    if (course in preMap) {
      for (let p of preMap[course]) {
        if (isCycle(p, seen)) {
          return true;
        }
      }
    }

    preMap[course] = [];
    seen.delete(course);
    return false;
  };

  for (let course in preMap) {
    if (isCycle(course, visited, preMap[course])) {
      return false;
    }
  }

  return true;
};
