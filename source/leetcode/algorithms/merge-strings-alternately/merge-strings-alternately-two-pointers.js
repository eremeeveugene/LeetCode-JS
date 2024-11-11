/**
 * Time complexity - O(n)
 * Space complexity - O(n + m)
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let result = [];

  let word1Index = 0;
  let word2Index = 0;

  while (word1Index < word1.length || word2Index < word2.length) {
    if (word1Index < word1.length) {
      result.push(word1[word1Index]);

      word1Index++;
    }

    if (word2Index < word2.length) {
      result.push(word2[word2Index]);

      word2Index++;
    }
  }

  return result.join("");
};

module.exports = mergeAlternately;
