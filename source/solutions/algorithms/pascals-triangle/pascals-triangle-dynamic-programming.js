/**
 * https://leetcode.com/problems/pascals-triangle/description/
 * Time complexity - O(n^2)
 * Space complexity - O(n^2)
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let result = [];

  result.push([1]);

  for (let i = 1; i < numRows; i++) {
    let current = [1];

    for (let j = 1; j < i; j++) {
      current.push(result[i - 1][j - 1] + result[i - 1][j]);
    }

    current.push(1);

    result.push(current);
  }

  return result;
};

export default generate;
