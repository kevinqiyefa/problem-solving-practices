// 763. Partition Labels

// A string S of lowercase letters is given. We want to partition this string into as many parts as possible so that each letter appears in at most one part, and return a list of integers representing the size of these parts.

// Example 1:
// Input: S = "ababcbacadefegdehijhklij"
// Output: [9,7,8]
// Explanation:
// The partition is "ababcbaca", "defegde", "hijhklij".
// This is a partition so that each letter appears in at most one part.
// A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.
// Note:

// S will have length in range [1, 500].
// S will consist of lowercase letters ('a' to 'z') only.

/**
 * @param {string} S
 * @return {number[]}
 */ //  012345  <- Indexes
var partitionLabels = function(S) {
  // 'abacdc' <- Sample input
  if (!S || S.length < 0) return [];

  const lastIndexMap = {}; // {a:2, b:1, c:5, d:4} <- Sample `lastIndexMap`
  for (let i = 0; i < S.length; i++) {
    const ch = S[i];
    lastIndexMap[ch] = i;
  }

  const result = [];

  // Setup for handling the first partition
  let startIndex = 0; // Keeps track of the begining of the current partition
  let startChar = S[startIndex];
  let stopIndex = lastIndexMap[startChar]; // Keeps track of the end of the current partition

  // For each start of a new partition..
  while (startIndex < S.length) {
    // Keep expanding the `stopIndex` for each character between
    // `startIndex` and the expanding `stopIndex`
    for (let i = startIndex; i < stopIndex; i++) {
      const currentChar = S[i];
      const currentCharLastIndex = lastIndexMap[currentChar];
      stopIndex = Math.max(stopIndex, currentCharLastIndex);
    }

    // Once we've fully expanded the current partition, save it to the result
    result.push(stopIndex - startIndex + 1);

    // And set up the next partion
    startIndex = stopIndex + 1;
    startChar = S[startIndex];
    stopIndex = lastIndexMap[startChar];
  }

  return result;
};
