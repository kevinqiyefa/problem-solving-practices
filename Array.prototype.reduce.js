// Array.prototype.reduce

// Array.prototype.reduce is a way of "reducing" elements in an array by calling a "reducer" callback function on each element of the array in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

// Implement Array.prototype.reduce. To avoid overwriting the actual Array.prototype.reduce which is being used by the autograder, we shall instead implement it as Array.prototype.myReduce.

// Examples
// [1, 2, 3].myReduce((prev, curr) => prev + curr, 0); // 6
// [1, 2, 3].myReduce((prev, curr) => prev + curr, 4); // 10
// Notes
// There are some nuances regarding how the Array.prototype.reduce function works and what values are being passed to the reducer callback. You are recommended to read the specification for Array.prototype.reduce on MDN Docs before attempting.


/**
 * @template T, U
 * @param {(previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U} callbackFn
 * @param {U} [initialValue]
 * @return {U}
 */
Array.prototype.myReduce = function (callbackFn, initialValue) {
    if(!callbackFn) throw new TypeError(callbackFn + "is not a function")
  
    const arr = this;
    let accumulator;
    let startIndex;
  
    if(arguments.length >= 2){
      accumulator = initialValue
      startIndex = 0
    } else {
      if(!arr.length){
        throw new TypeError('Reduce with empty array and no initial value')
      }
      accumulator = arr[0]
      startIndex = 1
    } 
  
    for(let i = startIndex; i< arr.length; i++){
      if (i in arr) {
        accumulator = callbackFn(accumulator, arr[i], i, arr)
      }
    }
  
    return accumulator
  
  
  };