// Flatten

// Implement a function flatten that returns a newly-created array with all sub-array elements concatenated recursively into a single level.

// Examples
// // Single-level arrays are unaffected.
// flatten([1, 2, 3]); // [1, 2, 3]

// // Inner arrays are flattened into a single level.
// flatten([1, [2, 3]]); // [1, 2, 3]
// flatten([
//   [1, 2],
//   [3, 4],
// ]); // [1, 2, 3, 4]

// // Flattens recursively.
// flatten([1, [2, [3, [4, [5]]]]]); // [1, 2, 3, 4, 5]

/**
 * @param {Array<*|Array>} value
 * @return {Array}
 */
export default function flatten(value) {
  // return value.flat(Infinity)
  return value.reduce((acc, cur) => {
    return Array.isArray(cur) ? acc.concat(flatten(cur)) : acc.concat(cur);
  }, []);
}
