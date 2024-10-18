/**
 * https://leetcode.com/problems/interval-cancellation/description/
 * Time complexity - O(1)
 * Space complexity - O(1)
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
  fn(...args);

  let intervalId = setInterval(() => {
    fn(...args);
  }, t);

  return function () {
    clearInterval(intervalId);
  };
};

module.exports = cancellable;
