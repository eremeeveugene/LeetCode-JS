/**
 * https://leetcode.com/problems/chunk-array/description/
 * Time complexity - O(n)
 * Space complexity - O(n)
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  let chunks = [];

  for (let i = 0; i < arr.length; i += size) {
    const chunk = arr.slice(i, i + size);

    chunks.push(chunk);
  }

  return chunks;
};

module.exports = chunk;
