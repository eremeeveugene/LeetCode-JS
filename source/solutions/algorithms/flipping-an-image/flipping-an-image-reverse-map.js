/**
 * https://leetcode.com/problems/flipping-an-image/description/
 * Time complexity - O(n * m)
 * Space complexity - O(1)
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  return image.map((row) => row.reverse().map((bit) => bit ^ 1));
};

export default flipAndInvertImage;
