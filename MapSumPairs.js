// 677. Map Sum Pairs

// Implement a MapSum class with insert, and sum methods.

// For the method insert, you'll be given a pair of (string, integer). The string represents the key and the integer represents the value. If the key already existed, then the original key-value pair will be overridden to the new one.

// For the method sum, you'll be given a string representing the prefix, and you need to return the sum of all the pairs' value whose key starts with the prefix.

// Example 1:
// Input: insert("apple", 3), Output: Null
// Input: sum("ap"), Output: 3
// Input: insert("app", 2), Output: Null
// Input: sum("ap"), Output: 5

/**
 * Initialize your data structure here.
 */
var MapSum = function () {
  this.mapObj = {}; //{string: integer}
  this.sumObj = {}; //{prefix: sum}
};

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function (key, val) {
  let diff = val;
  if (key in this.mapObj) {
    diff -= this.mapObj[key];
  }

  this.mapObj[key] = val;

  let temp = '';
  for (let c of key) {
    temp += c;
    this.sumObj[temp] = this.sumObj[temp] + diff || diff;
  }
};

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function (prefix) {
  return this.sumObj[prefix] || 0;
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */
