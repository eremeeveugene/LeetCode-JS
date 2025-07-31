/**
 * https://leetcode.com/problems/counter/description/
 * Time complexity - O(1)
 * Space complexity - O(1)
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  return function () {
    return n++;
  };
};

export default createCounter;
