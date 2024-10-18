/**
 * https://leetcode.com/problems/promise-time-limit/description/
 * Time complexity - O(1)
 * Space complexity - O(1)
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t);

      fn(...args)
        .then(resolve)
        .catch(reject)
        .finally(() => clearTimeout(timer));
    });
  };
};

module.exports = timeLimit;
