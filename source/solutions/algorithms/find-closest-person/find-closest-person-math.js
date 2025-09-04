/**
 * https://leetcode.com/problems/find-closest-person/description/
 * Time complexity - O(1)
 * Space complexity - O(1)
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function (x, y, z) {
  var distanceFromX = Math.abs(x - z);
  var distanceFromY = Math.abs(y - z);

  if (distanceFromX < distanceFromY) {
    return 1;
  } else if (distanceFromX > distanceFromY) {
    return 2;
  } else {
    return 0;
  }
};

export default findClosest;
