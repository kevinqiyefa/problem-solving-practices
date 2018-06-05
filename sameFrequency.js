// Write a function called Write a function called sameFrequency. sameFrequency. Given two positive integers,  find out if the two numbers have the same frequency of digits.

// Given two positive integers,  f
// Your solution MUST have the following complexities:

// Time: O(N + M), where N is the number of digits in the first number, and M is the number of digits in the second number.

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

function sameFrequency(n1, n2) {
  // good luck. Add any arguments you deem necessary.

  let arr1 = Array.from(n1 + '');
  let arr2 = Array.from(n2 + '');

  let obj1 = {},
    obj2 = {};
  for (let i of arr1) {
    obj1[i] = ++obj1[i] || 1;
  }

  for (let j of arr2) {
    obj2[j] = ++obj2[j] || 1;
  }

  for (let k in obj1) {
    if (obj1[k] !== obj2[k]) return false;
  }

  return true;
}
