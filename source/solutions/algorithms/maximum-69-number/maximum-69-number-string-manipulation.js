/**
 * https://leetcode.com/problems/maximum-69-number/description/
 * Time complexity - O(log n)
 * Space complexity - O(log n)
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  var digits = num.toString().split("");

  for (let i = 0; i < digits.length; i++) {
    const digit = digits[i];

    if (digit === "6") {
      digits[i] = "9";

      break;
    }
  }

  return parseInt(digits.join(""), 10);
};

export default maximum69Number;
