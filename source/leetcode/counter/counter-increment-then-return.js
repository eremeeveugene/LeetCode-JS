/**
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

module.exports = createCounter;
