/**
 * https://leetcode.com/problems/is-object-empty/description/
 * Time complexity - O(n)
 * Space complexity - O(n)
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  return Object.keys(obj).length === 0;
};

module.exports = isEmpty;
