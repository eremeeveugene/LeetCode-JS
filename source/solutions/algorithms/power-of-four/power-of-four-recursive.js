/**
 * https://leetcode.com/problems/power-of-four/description/
 * Time complexity - O(log n)
 * Space complexity - O(log n)
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  if (n <= 0) return false;

  if (n === 1) {
    return true;
  }

  return isPowerOfFour(n / 4);
};

export default isPowerOfFour;
