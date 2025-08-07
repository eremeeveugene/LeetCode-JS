/**
 * https://leetcode.com/problems/transform-array-by-parity/description/
 * Time complexity - O(n)
 * Space complexity - O(1)
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (nums[left] % 2 === 0) {
      nums[left] = 0;

      left++;
    } else {
      nums[left] = nums[right];
      nums[right] = 1;

      right--;
    }
  }

  return nums;
};

export default transformArray;
