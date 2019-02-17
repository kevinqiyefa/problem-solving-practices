// 1. Equalize the Array

let arr1 = [1, 2, 2, 3];
let arr2 = [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7];
let arr3 = [7, 2, 4, 5, 2, 3, 3, 4, 1, 7, 3];

function equalizeArr(nums) {
  let obj = {};
  //count each element.
  for (let n of nums) {
    obj[n] = obj[n] + 1 || 1;
  }

  //nums length - the most common value
  return nums.length - Math.max(...Object.values(obj));
}

console.log('#1. Equalize the Array:');
console.log(equalizeArr(arr1));
console.log(equalizeArr(arr2));
console.log(equalizeArr(arr3));
