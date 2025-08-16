/**
 * https://leetcode.com/problems/maximum-69-number/description/
 * Time complexity - O(log n)
 * Space complexity - O(1)
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  let temp = num;
  let placeValue = 3;
  let bumpValue = 0;

  while (temp > 0) {
    if (temp % 10 === 6) {
      bumpValue = placeValue;
    }

    temp = Math.floor(temp / 10);
    placeValue *= 10;
  }

  return bumpValue === 0 ? num : num + bumpValue;
};

export default maximum69Number;
