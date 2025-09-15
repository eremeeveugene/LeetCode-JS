const ALPHABET_LENGTH = 26;
const A_CODE = "a".charCodeAt(0);

/**
 * https://leetcode.com/problems/maximum-number-of-words-you-can-type/description/
 * Time complexity - O(n + m), where n is text.length and m is brokenLetters.length
 * Space complexity - O(1)
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
  const brokenLettersLookup = new Uint8Array(ALPHABET_LENGTH);

  const brokenLettersLength = brokenLetters.length;

  for (let i = 0; i < brokenLettersLength; i++) {
    const brokenLetterIndex = GetLetterCode(brokenLetters[i]) - A_CODE;

    brokenLettersLookup[brokenLetterIndex] = 1;
  }

  const textLength = text.length;

  let goodWordsCount = 0;

  let isBroken = false;

  for (let i = 0; i < textLength; i++) {
    const c = text[i];

    if (c == " ") {
      if (isBroken) {
        isBroken = false;
      } else {
        goodWordsCount++;
      }
    } else {
      const brokenLetterIndex = GetLetterCode(c) - A_CODE;

      if (brokenLettersLookup[brokenLetterIndex] == 0) {
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

function GetLetterCode(letter) {
  return letter.charCodeAt(0);
}

export default canBeTypedWords;
