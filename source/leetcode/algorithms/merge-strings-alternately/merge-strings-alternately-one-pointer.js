/**
 * Time complexity - O(n)
 * Space complexity - O(n + m)
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let result = [];

  let index = 0;

  while (index < word1.length || index < word2.length) {
    if (index < word1.length) {
      result.push(word1[index]);
    }

    if (index < word2.length) {
      result.push(word2[index]);
    }

    index++;
  }

  return result.join("");
};

module.exports = mergeAlternately;
