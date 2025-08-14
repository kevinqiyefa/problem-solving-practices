// 3. Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest substring without duplicate characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

    // Solution 1: Sliding Window

    var lengthOfLongestSubstring = function(s) {
        let left = 0;
        let right = 0;
        let maxLength = 0;
        let charSet = new Set();

        while (right < s.length) {
            if (!charSet.has(s[right])) {
                charSet.add(s[right]);
                right++;
                maxLength = Math.max(maxLength, charSet.size);
            } else {
                charSet.delete(s[left]);
                left++;
            }
        }   
        return maxLength;
    }

    console.log(lengthOfLongestSubstring("abcabcbb"));
    console.log(lengthOfLongestSubstring("bbbbb"));
    console.log(lengthOfLongestSubstring("pwwkew"));