/**
 * https://leetcode.com/problems/power-of-four/description/
 * Time complexity - O(log n)
 * Space complexity - O(1)
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  if (n <= 0) return false;

  while (n % 4 === 0) {
    n /= 4;
  }

  return n === 1;
};

export default isPowerOfFour;
