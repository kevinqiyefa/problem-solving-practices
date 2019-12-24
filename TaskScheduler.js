// 621. Task Scheduler

// Given a char array representing tasks CPU need to do. It contains capital letters A to Z where different letters represent different tasks. Tasks could be done without original order. Each task could be done in one interval. For each interval, CPU could finish one task or just be idle.

// However, there is a non-negative cooling interval n that means between two same tasks, there must be at least n intervals that CPU are doing different tasks or just be idle.

// You need to return the least number of intervals the CPU will take to finish all the given tasks.

// Example:

// Input: tasks = ["A","A","A","B","B","B"], n = 2
// Output: 8
// Explanation: A -> B -> idle -> A -> B -> idle -> A -> B.

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
  let taskCounts = {};
  for (let t of tasks) {
    taskCounts[t] = taskCounts[t] + 1 || 1;
  }

  let mostFreqTask = Object.keys(taskCounts).sort(
    (a, b) => taskCounts[b] - taskCounts[a]
  )[0];
  let mostCountedTasks = taskCounts[mostFreqTask];

  let idles = (mostCountedTasks - 1) * n;

  for (let task in taskCounts) {
    if (task !== mostFreqTask) {
      idles -= Math.min(mostCountedTasks - 1, taskCounts[task]);
    }
  }

  return idles < 0 ? tasks.length : tasks.length + idles;
};
