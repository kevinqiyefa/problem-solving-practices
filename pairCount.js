// Imagine you have a group of n people. Implement a function called pairCount which counts the number of ways you can create a pair by selecting two people in the group.

// Note that the order of people in the pair doesn't matter: a pair with person A and person B shouldn't be counted as different than a pair with person B and person A.

// Examples:

// pairCount(1); // 0
// pairCount(2); // 1
// pairCount(3); // 3
// pairCount(4); // 6
// pairCount(8); // 28
// pairCount(25); // 300
// pairCount(120); // 7140
// pairCount(999); // 498501

function pairCount(num) {
  // good luck. add any arguments you deem necessary.
  // let count = 0;

  // for(let i = 0; i < num; i++ ){
  //   count = count +i;
  // }

  // return count;

  return (num - 1) * num / 2;
}
