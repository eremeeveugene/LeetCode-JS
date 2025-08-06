/**
 * https://leetcode.com/problems/build-array-from-permutation/description/
 * Time complexity - O(n)
 * Space complexity - O(1)
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    nums[i] += 1000 * (nums[nums[i]] % 1000);
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = Math.floor(nums[i] / 1000);
  }

  return nums;
};

export default buildArray;
