/**
 * https://leetcode.com/problems/memoize/description/
 * Time complexity - O(n)
 * Space complexity - O(n)
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const map = new Map();

  return function (...args) {
    const key = args.toString();

    if (map.has(key)) {
      return map.get(key);
    } else {
      const value = fn(...args);

      map.set(key, value);

      return value;
    }
  };
}

module.exports = memoize;
