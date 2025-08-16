/**
 * https://leetcode.com/problems/maximum-69-number/description/
 * Time complexity - O(log n)
 * Space complexity - O(1)
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  let temp = 0;

  while (num > 0) {
    temp = temp * 10 + (num % 10);

    num = Math.floor(num / 10);
  }

  let isSwapepd = false;

  while (temp > 0) {
    num *= 10;

    let digit = temp % 10;

    if (!isSwapepd && digit === 6) {
      digit = 9;

      isSwapepd = true;
    }

    num += digit;

    temp = Math.floor(temp / 10);
  }

  return num;
};

export default maximum69Number;
