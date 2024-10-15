/**
 * https://leetcode.com/problems/timeout-cancellation/description/
 * Time complexity - O(1)
 * Space complexity - O(1)
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
  const timeoutId = setTimeout(() => {
    fn(...args);
  }, t);

  const cancelFn = function () {
    clearTimeout(timeoutId);
  };

  return cancelFn;
};

module.exports = cancellable;
