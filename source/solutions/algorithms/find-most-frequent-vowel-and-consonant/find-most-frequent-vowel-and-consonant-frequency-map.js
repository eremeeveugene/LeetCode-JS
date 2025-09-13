/**
 * https://leetcode.com/problems/find-most-frequent-vowel-and-consonant/description/
 * Time complexity - O(n)
 * Space complexity - O(n)
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
  const frequencyMap = new Map();

  let maxVowelCount = 0;
  let maxConsonantCount = 0;

  for (let i = 0; i < s.length; i++) {
    const c = s[i];

    const frequency = (frequencyMap.get(c) || 0) + 1;

    frequencyMap.set(c, frequency);

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
