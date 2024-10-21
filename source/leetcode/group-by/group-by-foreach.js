/**
 * https://leetcode.com/problems/group-by/description/
 * Time complexity - O(n)
 * Space complexity - O(n)
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = groupBy;

function groupBy(fn) {
  let result = {};

  this.forEach((item) => {
    const key = fn(item);

    if (!result[key]) {
      result[key] = [];
    }

    result[key].push(item);
  });

  return result;
}

module.exports = groupBy;
