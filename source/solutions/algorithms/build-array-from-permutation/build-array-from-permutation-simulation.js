/**
 * https://leetcode.com/problems/build-array-from-permutation/description/
 * Time complexity - O(n)
 * Space complexity - O(1)
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
  const result = new Array(nums.length);

  for (let i = 0; i < nums.length; i++) {
    result[i] = nums[nums[i]];
  }

  return result;
};

export default buildArray;
