/**
 * https://leetcode.com/problems/power-of-two/description/
 * Time complexity - O(log n)
 * Space complexity - O(1)
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n <= 0) {
    return false;
  }

  while (n % 2 === 0) {
    n /= 2;
  }

  return n === 1;
};

export default isPowerOfTwo;
