/**
 * https://leetcode.com/problems/power-of-two/description/
 * Time complexity - O(1)
 * Space complexity - O(1)
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n <= 0) {
    return false;
  }

  return (n & (n - 1)) == 0;
};

export default isPowerOfTwo;
