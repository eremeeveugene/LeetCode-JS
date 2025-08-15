/**
 * https://leetcode.com/problems/power-of-three/description/
 * Time complexity - O(log n)
 * Space complexity - O(log n)
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (n <= 0) {
    return false;
  }

  if (n === 1) {
    return true;
  }

  return isPowerOfThree(n / 3);
};

export default isPowerOfThree;
