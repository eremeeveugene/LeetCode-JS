/**
 * https://leetcode.com/problems/flipping-an-image/description/
 * Time complexity - O(n * m)
 * Space complexity - O(n * m)
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  return image.map((row) => row.reverse().map((bit) => bit ^ 1));
};

export default flipAndInvertImage;
