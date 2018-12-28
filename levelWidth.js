// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }
}

function levelWidth(root) {
  const arr = [root, 's'];
  const counters = [0];

  while (arr.length > 1) {
    let node = arr.shift();

    if (node === 's') {
      counters.push(0);
      arr.push('s');
    } else {
      counters[counters.length - 1]++;
      arr.push(...node.children);
    }
  }
  return counters;
}
