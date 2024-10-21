/**
 * https://leetcode.com/problems/is-object-empty/description/
 * Time complexity - O(n)
 * Space complexity - O(n)
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  const jsonString = JSON.stringify(obj);

  return jsonString === "{}" || jsonString === "[]";
};

module.exports = isEmpty;