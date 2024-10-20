/**
 * https://leetcode.com/problems/is-object-empty/description/
 * Time complexity - O(1)
 * Space complexity - O(1)
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  for (const _ in obj) return false;

  return true;
};

module.exports = isEmpty;
