/**
 * https://leetcode.com/problems/build-array-from-permutation/description/
 * Time complexity - O(n)
 * Space complexity - O(1)
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
  return nums.map((i) => nums[i]);
};

export default buildArray;
