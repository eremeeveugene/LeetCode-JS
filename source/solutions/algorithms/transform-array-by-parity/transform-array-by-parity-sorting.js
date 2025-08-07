/**
 * https://leetcode.com/problems/transform-array-by-parity/description/
 * Time complexity - O(n log n)
 * Space complexity - O(n)
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      nums[i] = 0;
    } else {
      nums[i] = 1;
    }
  }

  nums.sort();

  return nums;
};

export default transformArray;
