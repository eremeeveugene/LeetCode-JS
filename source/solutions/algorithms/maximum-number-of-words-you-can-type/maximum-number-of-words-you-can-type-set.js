/**
 * https://leetcode.com/problems/maximum-number-of-words-you-can-type/description/
 * Time complexity - O(n + m), where n is text.length and m is brokenLetters.length
 * Space complexity - O(m), where m is brokenLetters.length
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
  const brokenLettersSet = new Set(brokenLetters);

  let goodWordsCount = 0;

  let isBroken = false;

  for (const c of text) {
    if (c == " ") {
      if (isBroken) {
        isBroken = false;
      } else {
        goodWordsCount++;
      }
    } else {
      if (!brokenLettersSet.has(c)) {
        continue;
      }

      isBroken = true;
    }
  }

  if (!isBroken) {
    goodWordsCount++;
  }

  return goodWordsCount;
};

export default canBeTypedWords;
