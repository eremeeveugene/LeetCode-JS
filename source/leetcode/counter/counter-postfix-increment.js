/**
 * Time complexity - O(1)
 * Space complexity - O(1)
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  let currentCount = n - 1;

  return function () {
    currentCount += 1;

    return currentCount;
  };
};

module.exports = createCounter;
