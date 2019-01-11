// Given two strings S and T, determine if they are both one edit distance apart.

// Hide Company Tags Snapchat Uber Facebook Twitter
// Hide Tags String
// Hide Similar Problems (H) Edit Distance

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isOneEditDistance = function(s, t) {
  if (s.length > t.length) {
    [s, t] = [t, s];
  }

  if (t.length - s.length > 1) {
    return false;
  }

  let foundDiff = false;
  for (let i = 0, j = 0; i < s.length; i++, j++) {
    if (s[i] !== t[j]) {
      if (foundDiff) {
        return false;
      }

      foundDiff = true;

      if (s.length !== t.length) {
        i--;
      }
    }
  }

  return true;
};

isOneEditDistance('abcd', 'abc');
