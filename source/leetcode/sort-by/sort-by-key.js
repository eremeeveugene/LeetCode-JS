/**
 * https://leetcode.com/problems/sort-by/description/
 * Time complexity - O(n log n)
 * Space complexity - O(n)
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
};

module.exports = sortBy;
