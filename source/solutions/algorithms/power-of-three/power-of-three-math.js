const MAX_POWER_OF_THREE = 1162261467;

/**
 * https://leetcode.com/problems/power-of-three/description/
 * Time complexity - O(1)
 * Space complexity - O(1)
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (n <= 0) {
    return false;
  }

  return MAX_POWER_OF_THREE % n === 0;
};

export default isPowerOfThree;
