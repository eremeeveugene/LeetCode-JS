/**
 * https://leetcode.com/problems/find-the-difference/description/
 * Time complexity - O(n)
 * Space complexity - O(n)
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let sMap = new Map();

  for (let i = 0; i < s.length; i++) {
    if (sMap.has(s[i])) {
      sMap.set(s[i], sMap.get(s[i]) + 1);
    } else {
      sMap.set(s[i], 1);
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (sMap.has(t[i])) {
      if (sMap.get(t[i]) > 0) {
        sMap.set(t[i], sMap.get(t[i]) - 1);
      } else {
        return t[i];
      }
    } else {
      return t[i];
    }
  }
};

module.exports = findTheDifference;
