// Description

// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.

// Examples
// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true

// Constraints
// Time - O(n)
// Space - O(n)

// Bonus Constraints
// Time - O(n log n)
// Space - O(1)

//solution #1
// function areThereDuplicates(...list) {
//   // good luck. (supply any arguments you deem necessary.)
//   let s = list.sort();
//   for(let i = 0; i < s.length-1; i++){
//     if(s[i] === s[i+1] ) return true;
//   }
//   return false;
// }

function areThereDuplicates(...list) {
  // good luck. (supply any arguments you deem necessary.)
  return new Set(list).size !== list.length;
}
