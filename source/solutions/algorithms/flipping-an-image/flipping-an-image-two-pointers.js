/**
 * https://leetcode.com/problems/flipping-an-image/description/
 * Time complexity - O(n * m)
 * Space complexity - O(1)
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  for (let i = 0; i < image.length; i++) {
    let left = 0;
    let right = image[i].length - 1;

    while (left < right) {
      [image[i][left], image[i][right]] = [
        image[i][right] ^ 1,
        image[i][left] ^ 1,
      ];

      left++;
      right--;
    }

    if (left === right) {
      image[i][left] ^= 1;
    }
  }

  return image;
};

export default flipAndInvertImage;
