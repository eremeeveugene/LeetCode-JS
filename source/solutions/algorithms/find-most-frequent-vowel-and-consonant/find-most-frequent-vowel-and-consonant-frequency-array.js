const A_CODE = "a".charCodeAt(0);
const Z_CODE = "z".charCodeAt(0);
const ALPHABET_LENGTH = Z_CODE - A_CODE + 1;

/**
 * https://leetcode.com/problems/find-most-frequent-vowel-and-consonant/description/
 * Time complexity - O(n)
 * Space complexity - O(1)
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
  const frequencyArray = new Uint16Array(ALPHABET_LENGTH);

  let maxVowelCount = 0;
  let maxConsonantCount = 0;

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    const index = c.charCodeAt(0) - A_CODE;

    frequencyArray[index]++;

    const frequency = frequencyArray[index];

    if (isVowel(c)) {
      maxVowelCount = Math.max(maxVowelCount, frequency);
    } else {
      maxConsonantCount = Math.max(maxConsonantCount, frequency);
    }
  }

  return maxVowelCount + maxConsonantCount;
};

function isVowel(c) {
  switch (c) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      return true;
    default:
      return false;
  }
}

export default maxFreqSum;
